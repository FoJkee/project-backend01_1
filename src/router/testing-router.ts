import {Request, Response, Router} from "express";
import {http_statuses} from "../index";

type videoType = {
    id: number,
    title: string,
    author: string,
    canBeDownloaded: boolean,
    minAgeRestriction: null | number,
    createdAt: string,
    publicationDate: string,
    availableResolutions: string[]
}
const videos: videoType[] = [

]
export const testingRouter = Router({})
testingRouter.delete('/all-data', (req: Request, res: Response) => {
    const deleteAll: videoType[] = []
    res.send(deleteAll).sendStatus(http_statuses.No_Content_204)
})