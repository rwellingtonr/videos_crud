/* What this Service does... */

import { getRepository } from "typeorm"
import Category from "../../entities/category"
import Videos from "../../entities/videos"
import { VideosReq } from "../../interface"

class createVideosServices {
	async execute(videoData: VideosReq): Promise<Videos> {
		const { category_id } = videoData

		const videoRepo = getRepository(Videos)
		const category = getRepository(Category)

		if (!(await category.findOne(category_id))) {
			throw new Error("Category doesn't exist")
		}

		const video = videoRepo.create(videoData)

		await videoRepo.save(video)

		return video
	}
}

export { createVideosServices }
