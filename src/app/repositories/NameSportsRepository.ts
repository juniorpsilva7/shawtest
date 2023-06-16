import { Response } from 'express'
import { Interface } from "readline";
import { sqlQuery } from "../database/connection"

interface NameSports {
    name: string;
    city: string;
    country: string;
    favorite_sport: string;
}

class NameSportsRepository {

    // CRUD
    async create(nameSportsLine: Interface, response: Response<any, Record<string, any>>) {
        const nameSports: NameSports[] = [];
        
        const sql = 'INSERT INTO name_sports(name,city,country,favorite_sport) VALUES (?,?,?,?);'

        let first = true;
        for await (let line of nameSportsLine) {

            // skip first interarion
            if (first) {
                first = false;
                continue
            }

            const nameSportsLineSplit = line.split(",");

            nameSports.push({
                name: nameSportsLineSplit[0],
                city: nameSportsLineSplit[1],
                country: nameSportsLineSplit[2],
                favorite_sport: nameSportsLineSplit[3]
            });
            
        }

        for await (let {name, city, country, favorite_sport} of nameSports) {
            const values = [name, city, country, favorite_sport];
            sqlQuery(sql, values, 'It was not possible to create registry >')
        }

        response.status(201).json(nameSports)
        
    }

    findByQuery(id: string | string[]) {
        const nameSportsSearch: NameSports[] = [];
        const sql = "SELECT * FROM name_sports WHERE name LIKE '%"+id+"%' OR city like '%"+id+"%' OR country like '%"+id+"%' OR favorite_sport like '%"+id+"%';"
        const rows = sqlQuery(sql, id, 'It was not possible to find')
        return rows;
    }

    findAll() {
        const sql = "SELECT * FROM name_sports;"
        return sqlQuery(sql, [], 'It was not possible to find')
    }

}

export default new NameSportsRepository
