import { Router } from "express"

/*Categories*/
import { createCategoryController } from "../controller/categories/createCategoryController"
import { deleteCategoryControlller } from "../controller/categories/deleteCategoryController"
import { getAllCategoryController } from "../controller/categories/getAllCategoryController"
import { updateCategoryController } from "../controller/categories/updateCategoryController"

/* Videos */
import { createVideosController } from "../controller/videos/createVideosController"
import { getAllVideosController } from "../controller/videos/getAllVideosController"

const routes = Router()
/*Categories*/
routes.get("/categories", new getAllCategoryController().handle)
routes.post("/categories", new createCategoryController().handle)
routes.put("/categories/:id", new updateCategoryController().handle)
routes.delete("/categories/:id", new deleteCategoryControlller().handle)

/*Videos*/
routes.get("/videos", new getAllVideosController().handle)
routes.post("/videos", new createVideosController().handle)

export { routes }
