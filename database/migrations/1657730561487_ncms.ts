import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Ncms extends BaseSchema {
  protected tableName = 'ncms'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('codigo').unique()
      table.string('descricao')
      table.float('aliquota')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
