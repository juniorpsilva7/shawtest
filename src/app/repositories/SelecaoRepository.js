import { sqlQuery } from "../database/connection.ts"

class SelecaoRepository {
    // CRUD
    create(selecao) {
        const sql = "INSERT INTO selecoes SET ?;"
        return sqlQuery(sql, selecao, 'It was not possible to create')
    }

    findAll() {
        const sql = "SELECT * FROM selecoes;"
        return sqlQuery(sql, 'It was not possible to find')
    }

    findById(id) {
        const sql = "SELECT * FROM selecoes WHERE id=?;"
        return sqlQuery(sql, id, 'It was not possible to find')
        
    }

    update(selecao, id) {
        const sql = "UPDATE selecoes SET ? WHERE id=?;"
        return sqlQuery(sql, [selecao, id], 'It was not possible to update')
    }

    delete(id) {
        const sql = "DELETE FROM selecoes WHERE id=?;"
        return sqlQuery(sql, id, 'It was not possible to remove')
    }

}

export default new SelecaoRepository
