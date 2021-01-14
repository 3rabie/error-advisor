import { config } from "dotenv"
import app from "./routes/index"

config()

const port = process.env.SERVER_PORT // default port to listen
// runScheduledJobs()

// start the Express server
export let server = app.listen(port, () => {
})
