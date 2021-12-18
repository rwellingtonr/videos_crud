import { Router } from "express"
import { createCategoryController } from "../controller/createCategoryController"
import { deleteCategoryControlller } from "../controller/deleteCategoryController"
import { getAllCategoryController } from "../controller/getAllCategoryController"
import { updateCategoryController } from "../controller/updateCategoryController"

const routes = Router()

routes.get("/categories", new getAllCategoryController().handle)
routes.post("/categories", new createCategoryController().handle)
routes.put("/categories/:id", new updateCategoryController().handle)
routes.delete("/categories/:id", new deleteCategoryControlller().handle)

export { routes }
