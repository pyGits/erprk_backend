import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tributacaos extends BaseSchema {
  protected tableName = 'tributacaos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('codigo').unique();
      table.string('tributacao')
      table.float('icms')
      table.integer('cfop')
      table.integer('csosn')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
