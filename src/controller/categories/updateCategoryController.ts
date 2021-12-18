/* What this Controller does... */
import { Request, Response } from "express"
import { ICreateCategory } from "../../interface"
import { updateCategoryService } from "../../services/categories/updateCategoryService"

class updateCategoryController {
	async handle(req: Request, res: Response) {
		try {
			const { id } = req.params
			const { description }: ICreateCategory = req.body

			const inputData = {
				description: description.toLowerCase(),
				id,
			}

			const service = new updateCategoryService()
			const result = await service.execute(inputData)

			return res.status(200).json({ result })
		} catch (error) {
			return res.status(401).json({ error })
		}
	}
}
export { updateCategoryController }
