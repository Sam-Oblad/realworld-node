import dotenv from "dotenv";

dotenv.config();

import app from "./app";
import db from "./db";

db.initialize()
    .then(() => {
        console.log("Database initialized");
    })
    .then(() => {
        const serverPort = process.env.SERVER_PORT || 8080;

        app.listen(serverPort, () => {
            console.log("Server is running on port", serverPort);
        });
    })
    .catch((error) => {
        console.log("Database initialization error:", error);
    });
