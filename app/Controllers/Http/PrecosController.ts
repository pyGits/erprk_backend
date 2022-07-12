import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Produto from 'App/Models/Produto'
import Preco from 'App/Models/Preco'

export default class PrecosController {
  public async store({ request, params, response }: HttpContextContract) {
    const body = request.body()
    const codigoproduto = params.codigoproduto

    await Produto.findByOrFail('codigo', codigoproduto)

    body.codigoproduto = codigoproduto

    const preco = await Preco.create(body)

    response.status(201)

    return {
      message: 'Preço adicionado com sucesso',
      data: preco,
    }
  }

  // atualizar preço
  public async update({ request, params }: HttpContextContract) {
    const body = request.body()
    const preco = await Preco.query()
      .where('codigoproduto', params.codigoproduto)
      .andWhere('loja', body.loja)
      .firstOrFail()

    preco.preco = body.preco
    preco.custo = body.custo
    preco.margem = body.margem

    await preco.save()
    return {
      message: 'Preco atualizado com sucesso !',
      data: preco,
    }
  }
  // RETORNAR UM PREÇO
  public async show({ params }: HttpContextContract) {
    const preco = await Preco.query()
      .where('codigoproduto', params.codigoproduto)
      .andWhere('id', params.id)
      .preload('lojas')
      .firstOrFail()

    return {
      data: preco,
    }
  }
  public async index({ params }: HttpContextContract) {
    const preco = await Preco.query().where('codigoproduto', params.codigoproduto).preload('lojas')

    return {
      data: preco,
    }
  }
}
