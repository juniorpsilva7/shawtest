import { Request, Response, Router, request } from "express"
import { Readable } from "stream"
import readLine from "readline"
import multer from "multer"
import NameSportsController from "./app/controllers/NameSportsController"


const router = Router()

const multerConfig = multer()

router.post("/api/files", multerConfig.single("file"), async (request: Request, response: Response) => {
    const { file } = request;
    if (file !== undefined) {
        const { buffer } = file;

        const readableFile = new Readable()
        readableFile.push(buffer)
        readableFile.push(null)

        const nameSportsLine = readLine.createInterface({
            input: readableFile
        })

        NameSportsController.store(nameSportsLine, response)
    }
});

router.get("/api/users", NameSportsController.show);

export { router };
