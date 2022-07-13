import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Ncm from 'App/Models/Ncm'

export default class NcMsController {
  public async index({ response }: HttpContextContract) {
    const ncms = await Ncm.all()
    if (ncms) {
      response.status(200).json({ data: ncms, status: 200 })
    } else {
      response.status(404).json({ data: {}, status: 404 })
    }
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({ response, params }: HttpContextContract) {
    const ncm = await Ncm.findBy('codigo', params.id)
    if (ncm) {
      response.status(200).json({ data: ncm })
    } else {
      response.status(404).json({ data: {}, status: 404 })
    }
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
