import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Loja from 'App/Models/Loja'

export default class LojasController {
  public async store({request,response}:HttpContextContract){
    const body = request.body();
    const loja = await Loja.create(body);
    response.status(201)
    return {
        msg: "Loja criada com sucesso!",
        data:loja,
    }
  }
}
