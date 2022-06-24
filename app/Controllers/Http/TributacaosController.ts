// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Tributacao from "App/Models/Tributacao";

export default class TributacaosController {


  public async index(){
    const tributacoes = await Tributacao.all();

    return{
        data:tributacoes,
    }

}
}
