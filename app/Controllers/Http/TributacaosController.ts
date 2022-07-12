import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Tributacao from 'App/Models/Tributacao'

export default class TributacaosController {
  public async index({ response }: HttpContextContract) {
    const tributacoes = await Tributacao.all()
    if (tributacoes) {
      response.status(200).json({ data: tributacoes, status: 200 })
    } else {
      response.status(404).json({ data: {}, status: 404 })
    }
  }
  public async show({ response, params }: HttpContextContract) {
    const tributacao = await Tributacao.findBy('codigo', params.id)
    if (tributacao) {
      response.status(200).json({ data: tributacao })
    } else {
      response.status(404).json({ data: {}, status: 404 })
    }
  }
}
