import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Produto from 'App/Models/Produto'

export default class ProdutosController {
    public async store({request, response}: HttpContextContract){

        const body = request.body()

        const produto = await Produto.create(body)

        response.status(201)

        return {
            msg: "Produto criado com sucesso!",
            data:produto,
        }
    }

    public async index(){
        const produtos = await Produto.query().preload("precos");

        return{
            data:produtos,
        }

    }
    public async show({params}:HttpContextContract){
        const produto = await Produto.findByOrFail('codigo',params.id)

        await produto.load('precos')

        return{
            data:produto,
        }
    }

    public async destroy({params}:HttpContextContract){
        const produto = await Produto.findOrFail(params.id)
        await produto.delete()
        return {
            message: "Produto deletado com sucesso",
            data:produto,
        }
    }

    public async update({request,params}:HttpContextContract){
        const body = request.body()
        const produto = await Produto.findOrFail(params.id)

        produto.nome = body.nome
        produto.codigo = body.codigo
        produto.secao = body.secao

        await produto.save()
        return{
            message:"Produto atualizado com sucesso !",
            data:produto,
        }
    }

}
