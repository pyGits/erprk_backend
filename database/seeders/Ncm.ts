import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Ncm from 'App/Models/Ncm'

export default class NcmSeeder extends BaseSeeder {
  public async run() {
    await Ncm.createMany([
      {
        codigo: '19059090',
        descricao: 'NCM 1',
        aliquota: 10,
      },
      {
        codigo: '12345678',
        descricao: 'NCM 2',
        aliquota: 10,
      },
    ])
  }
}
