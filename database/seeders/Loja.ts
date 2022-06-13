import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Loja from 'App/Models/Loja'
export default class LojaSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method

    await Loja.createMany([{
      tenant_id: '555',
      cnpj:'08115094000156',
      loja: 'RK Solutions',


    },{
      tenant_id: '555',
      cnpj:'08115094000159',
      loja: 'Reginaldo Solutions',


    },
  ])
  }
}
