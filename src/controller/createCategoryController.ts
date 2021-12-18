/* What this Controller does... */
import { Request, Response } from "express"
import { ICreateCategory } from "../interface"
import { createCategoryService } from "../services/createCategoryService"

class createCategoryController {
	async handle(req: Request, res: Response) {
		try {
			const { name, description }: ICreateCategory = req.body

			const inputData = {
				name: name.toLowerCase(),
				description: description.toLowerCase(),
			}

			const service = new createCategoryService()

			const result = await service.execute(inputData)

			return res.status(200).json({ result: result })
		} catch (error) {
			return res.status(400).json({ error: error })
		}
	}
}
export { createCategoryController }
