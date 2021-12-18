/* What this Service does... */
import { getRepository } from "typeorm"
import Category from "../entities/category"
class getAllCategoryService {
	async execute() {
		const getRepo = getRepository(Category)

		const allCategories = await getRepo.find()

		return allCategories
	}
}

export { getAllCategoryService }
