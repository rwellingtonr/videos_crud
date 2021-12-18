/* What this Service does... */

import { getRepository } from "typeorm"
import Category from "../../entities/category"

class deleteCategoryService {
	async execute(id: string): Promise<void> {
		const repo = getRepository(Category)

		if (!(await repo.findOne(id))) {
			throw new Error("Category doesn't exist")
		}

		await repo.delete(id)
	}
}

export { deleteCategoryService }
