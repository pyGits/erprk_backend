import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Tributacao from 'App/Models/Tributacao'

export default class TributacaoSeeder extends BaseSeeder {
  public async run () {
    await Tributacao.createMany([{
      codigo: 'F00',
      tributacao:"FONTE",
      icms:0,
      cfop:5405,
      csosn:500,


    },{
      codigo: 'T18',
      tributacao:"TRIBUTADO 18%",
      icms:18,
      cfop:5102,
      csosn:102,


    },
  ])
  }
}

