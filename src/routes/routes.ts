import { Router } from "express"
import { createCategoryController } from "../controller/createCategoryController"
import { deleteCategoryControlller } from "../controller/deleteCategoryController"
import { getAllCategoryController } from "../controller/getAllCategoryController"

const routes = Router()

routes.get("/categories", new getAllCategoryController().handle)
routes.post("/categories", new createCategoryController().handle)
routes.delete("/categories/:id", new deleteCategoryControlller().handle)

export { routes }
