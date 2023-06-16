import SelecaoRepository from '../repositories/SelecaoRepository.js'

class SelecaoController {

    async index(req, res) {
        const row = await SelecaoRepository.findAll()
        res.json(row)
    }

    async show(req, res) {
        const id = req.params.id
        const row = await SelecaoRepository.findById(id)
        res.json(row)
    }

    async store(req, res) {
        const info = req.body
        const row = await SelecaoRepository.create(info)
        res.json(row)
        
    }

    async update(req, res) {
        const info = req.body
        const id = req.params.id
        const row = await SelecaoRepository.update(info, id)
        res.json(row)        
    }

    async delete(req, res) {
        const id = req.params.id
        const row = await SelecaoRepository.delete(id)
        res.json(row)
    }

}

// Singleton pattern
export default new SelecaoController