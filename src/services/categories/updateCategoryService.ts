/* What this Service does... */

import { getRepository } from "typeorm"
import Category from "../../entities/category"
import { ICreateCategory } from "../../interface"

class updateCategoryService {
	async execute(toUpdate: ICreateCategory): Promise<Category> {
		const { id, description } = toUpdate
		const repo = getRepository(Category)

		const category = await repo.findOne(id)

		if (!category) throw new Error("Category doesn't exist")

		category.description = description ? description : category.description

		await repo.save(category)

		return category
	}
}

export { updateCategoryService }
