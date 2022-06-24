import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Loja from 'App/Models/Loja'
import Preco from 'App/Models/Preco'

import Produto from 'App/Models/Produto'

export default class ProdutosController {
    // POST -> GRAVAR PRODUTO
    public async store({request, response}: HttpContextContract){

        const body = request.body()

        const produto = await Produto.create(body)

        body.precos.map( async pr => {
           await Preco.create(pr);
        });

        response.status(201)

        return {
            msg: "Produto criado com sucesso!",
            data:produto
        }
    }
    //RETORNAR TODOS PRODUTOS

    public async index(){
        const produtos = await Produto.query().preload("precos");

        return{
            data:produtos,
        }

    }
    // RETORNAR UM PRODUTO
    public async show({params}:HttpContextContract){
        const produto = await Produto.findByOrFail('codigo',params.id)
        await produto.load('precos',(p)=> {p.preload('lojas')})


        return{
            data:produto,
        }
    }
    // DELETAR UM PRODUTO
    public async destroy({params}:HttpContextContract){
        const produto = await Produto.findOrFail(params.id)
        await produto.delete()
        return {
            message: "Produto deletado com sucesso",
            data:produto,
        }
    }
    // ATUALIZAR UM PRODUTO -> VIA PATCH
    public async update({request,params}:HttpContextContract){
        const body = request.body()
        const produto = await Produto.findByOrFail('codigo',params.id)

        await Preco.updateOrCreateMany('id',body.precos)
        await Preco.updateOrCreateMany('tenant_id',body.precos)
        await Preco.updateOrCreateMany('custo',body.precos)
        await Preco.updateOrCreateMany('preco',body.precos)
        await Preco.updateOrCreateMany('margem',body.precos)



        produto.nome = body.nome
        produto.secao = body.secao
        produto.grupo = body.grupo
        produto.subgrupo = body.subgrupo
        produto.composicao = body.composicao
        produto.formavenda = body.formavenda
        produto.unidade = body.unidade





        await produto.save()
        return{
            message:"Produto atualizado com sucesso !",
            data:produto,
        }
    }
    // CADASTRAR NOVO PRODUTO, RETORNA NOVO SEQUENCIAL E INF PADRÃO
    public async novo({}:HttpContextContract){
      // gerar sequencial de código novo produto
      const lojas = await Loja.all();
      let precos = new Array();
      // gerar preços novos
      lojas.forEach((loja)=>{
        precos.push({loja:loja.id,preco:0,custo:0,margem:0,codigoproduto:'1',lojas:[loja],tenant_id:'555'})
      })

      const produto = {codigo:'1',nome:'',composicao:'N',formavenda:'N',unidade:'UN',precos:precos};

      return{
        message:"Novo produto",
        data:produto,

      }


    }

}
