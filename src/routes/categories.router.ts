import { Router } from 'express'
import * as categoryController from '../controller/categories.controller'
import { isAdmin } from '../middlewares/auth.middleware'
const router = Router()

router.post('/', categoryController.addCategories)

export default router
