import mongoose from "mongoose";
import app from "./app";
import configEnv from "./configEnv";
/*
src/server.ts e database connection takbe..
app.ts e express theke app start kora hobe..
 */
async function connectDB() {
    try {
        await mongoose.connect(configEnv.database_url as string)
        console.log('DB connect successfully!')
        app.listen(configEnv.port, () => {
            console.log(`Application listen on port ${configEnv.port} console`)
        })

    }
    catch (err) {
        console.log('Could not connect DB', err)
    }
}
connectDB()
