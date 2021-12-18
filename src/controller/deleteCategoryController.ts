/* What this Controller does... */
import { Request, Response } from "express"
import { deleteCategoryService } from "../services/deleteCategoryService"
class deleteCategoryControlller {
	async handle(req: Request, res: Response) {
		try {
			const { id } = req.params

			const service = new deleteCategoryService()
			await service.execute(id)

			return res.status(204).json({ message: "Category has been removed" })
		} catch (error) {
			return res.status(401).json({ error })
		}
	}
}
export { deleteCategoryControlller }
