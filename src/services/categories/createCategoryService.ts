/* What this Service does... */

import { getRepository } from "typeorm"
import Category from "../../entities/category"
import { ICreateCategory } from "../../interface"

class createCategoryService {
	async execute({ description, name }: ICreateCategory): Promise<Category> {
		const getRepo = getRepository(Category)

		if (await getRepo.findOne({ name })) {
			throw new Error("Category already exist!")
		}

		const data = { name, description }

		const category = getRepo.create(data)

		getRepo.save(category)

		return category
	}
}

export { createCategoryService }
