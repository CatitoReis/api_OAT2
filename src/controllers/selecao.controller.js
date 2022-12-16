const { nextTick } = require('process')
const Estadio = require('../models/selecao.model')


const save = async(req, res, next) => {
    try{
        const dados = req.body
        console.log(dados)
        const newSelecao = new Selecao(dados)
        console.log(newSelecao)
        const savedSelecao = await newSelecao.save()
        if(!savedSelecao){
            throw new error('Sem sucesso AO salvamento da selecao')
        }
        res.status(201).json({
            message: 'Selecao nova criado'
        })

    }catch(err){
        next('Erro: tentar registrar uma nova selecao',err)
    }
}

const getAll = async (req, res, next) =>{
    try{
        const selecoes = await Selecao.find()
        res.status(201).json(selecoes)
    }catch(err){
        next('Erro: Buscar a lista de selecoes',err)
    }
}

const getById = async (req, res, next) =>{
    try{
        const id = req.params.id
        const selecao = await Selecao.findById(id)
        if(!selecao){
            throw new error(`Selecao com id ${id} NAO encontrada`)
        }
    }catch(err){
        next('Erro: Buscar selecao especifica')
    }
}

const update = async (req, res, next) => {
    try{
        const id = req.params.id
        const dados = req.body

        const selecao = await Selecao.findById(id)
        if(!selecao){
            throw new error(`Selecao com id ${id} NAO encontrada`)
        }
        const updatedStadio = Selecao.findByIdAndUpdate(id, dados, {new: true})

    }catch(err){
        next('Falha: atualizar dados da Selecao', err)
    }
}

const deleteIt = async (req, res, next) =>{
    try{
        const id = req.params.id
        const selecao = Selecao.findById(id)
        if(!selecao){
            throw new error(`Selecao com id ${id} NAO encontrada`)
        }
        await Selecao.findByIdAndDelete(id)
        res(201).json({message: `Selecao com id ${id} Deletada`})
    }catch(err){
        next('Falha: Deletar selecao',err)
    }

}


module.exports = {
    save,
    getAll,
    getById,
    update,
    deleteIt
}