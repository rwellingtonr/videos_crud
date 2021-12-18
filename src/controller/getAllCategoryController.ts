/* What this Controller does... */
import { Request, Response } from "express"
import { getAllCategoryService } from "../services/getAllCategoryService"
class getAllCategoryController {
	async handle(req: Request, res: Response) {
		try {
			const service = new getAllCategoryService()
			const result = await service.execute()
			return res.status(200).json({ result: result })
		} catch (error) {
			return res.status(401).json({ error: error })
		}
	}
}
export { getAllCategoryController }
