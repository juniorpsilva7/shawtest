import { Request, Response } from 'express'
import { Interface } from 'readline'
import NameSportsRepository from '../repositories/NameSportsRepository'

class NameSportsController {

    async store(nameSportsLine: Interface, response: Response<any, Record<string, any>>) {
        const rows = await NameSportsRepository.create(nameSportsLine, response)
        response.json(rows)        
    }

    async show(req: Request, res: Response) {
        let q = req.query["q"];
        if(q){
            const row = await NameSportsRepository.findByQuery(q.toString())
            res.json(row)
        } else {
            const row = await NameSportsRepository.findAll();
            res.json(row)
        }
        
    }

}

// Singleton pattern
export default new NameSportsController