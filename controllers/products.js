import Products from '../models/Products.js'

export const getAllProd = async ( req, res, next ) => {
    try {
        const pubs = await Products.find()
        res.json(pubs)
    } catch (err) {
        next(err)
    }
}

export const getProdById = async( req, res, next) => {
    try {
        const pub = await Products.findById(req.params.id)
        res.json(pub)
    } catch (err) {
        next(err)
    }
}

export const postProd = async ( req, res, next ) => {
    try {
        const publication = new Products(req.body)
        await publication.save()
        res.json({message: "published"})
    } catch (err) {
        next(err)
    }
}