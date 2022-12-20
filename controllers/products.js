import Products from '../models/Products.js'

export const getAllProd = async ( req, res, next ) => {
    try {
        const prods = await Products.find().limit(req.query.perPage).skip(req.query.page*req.query.perPage)
        res.json(prods)
    } catch (err) {
        next(err)
    }
}

export const getProdById = async( req, res, next) => {
    try {
        const prod = await Products.findById(req.params.id)
        res.json(prod)
    } catch (err) {
        next(err)
    }
}

export const postProd = async ( req, res, next ) => {
    try {
        const postProd = new Products(req.body)
        const newProd = await postProd.save()
        res.json(newProd)
    } catch (err) {
        next(err)
    }
}

export const updateHotel = async(req, res, next) => {
    try {
        const prod = await Products.findByIdAndUpdate(req.params.id, { $set: req.body } )
        const updatedProd = await prod.save()
        res.json(updatedProd)
      } catch (err) {
        next(err)
    }
}

export const deleteHotel = async(req, res, next) => {
    try {
        await Products.findByIdAndDelete( req.params.id )
        res.json({message: 'hotel data deleted'})
      } catch (err) {
        next(err)
    }
}