import epxress from 'express'
import { register, getAllUsers, getUserById, login } from '../controllers/auth.js'
import { authValidation, loginChecks } from '../utils/validations.js'

const router = epxress.Router()

router.get('/', getAllUsers)

router.get('/:id', getUserById)

router.post('/register', register)

router.post('/login', loginChecks, authValidation, login)

export default router