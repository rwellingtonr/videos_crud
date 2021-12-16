import express from "express"
import cors from "cors"
import { createServer } from "http"
import { routes } from "../routes/routes"
import "dotenv/config"

// Start the app
const app = express()
//Connections
app.use(cors())
app.use(express.json())
app.use(routes)
//just for test
app.get("/", (req, res) => {
	return res.send("working")
})
/*Server with http method*/
const serverHttp = createServer(app)
export { serverHttp }
