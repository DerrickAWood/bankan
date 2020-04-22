import {
    dbContext
} from "../db/DbContext"
import {
    BadRequest
} from "../utils/Errors"


class TaskService {
    async getAll(userEmail) {
        return await dbContext.Tasks.find({
            creatorEmail: userEmail
        }).populate("creator", "name picture")
    }

    async find(query = {}) {
        let lists = await dbContext.Tasks.find(query)
        return lists
    }

    async getById(id, userEmail) {
        let data = await dbContext.Tasks.findOne({
            _id: id,
            creatorEmail: userEmail
        })
        if (!data) {
            throw new BadRequest("Invalid ID or you do not own this board")
        }
        return data
    }

    async create(rawData) {
        let data = await dbContext.Tasks.create(rawData)
        return data
    }


    async edit(id, userEmail, update) {
        let data = await dbContext.Tasks.findOneAndUpdate({
            _id: id,
            creatorEmail: userEmail
        }, update.oldTaskId, {
            new: true
        })
        if (!data) {
            throw new BadRequest("Invalid ID or you do not own this board");
        }
        return data;
    }

    async delete(id, userEmail) {
        let data = await dbContext.Tasks.findOneAndRemove({
            _id: id,
            creatorEmail: userEmail
        });
        if (!data) {
            throw new BadRequest("Invalid ID or you do not own this board");
        }
    }

}


export const taskService = new TaskService()