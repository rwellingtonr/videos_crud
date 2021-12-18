/* What this Service does... */

import { getRepository } from "typeorm"
import Videos from "../../entities/videos"

class getAllVideosService {
	async execute(): Promise<Videos[]> {
		const videosRepo = getRepository(Videos)
		const getAllVideos = await videosRepo.find({ relations: ["category"] })
		return getAllVideos
	}
}

export { getAllVideosService }
