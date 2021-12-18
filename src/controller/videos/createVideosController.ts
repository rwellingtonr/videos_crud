/* What this Controller does... */
import { Request, Response } from "express"
import { VideosReq } from "../../interface"
import { createVideosServices } from "../../services/videos/createVideosService"
class createVideosController {
	async handle(req: Request, res: Response) {
		try {
			const { category_id, description, duration, name }: VideosReq = req.body

			const inputData = {
				category_id,
				duration,
				name: name.toLowerCase(),
				description: description.toLowerCase(),
			}

			const service = new createVideosServices()
			const result = await service.execute(inputData)

			return res.status(200).json({ result: result })
		} catch (error) {
			return res.status(401).json({ error: error })
		}
	}
}
export { createVideosController }
