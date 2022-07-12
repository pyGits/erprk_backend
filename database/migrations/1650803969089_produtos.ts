import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Produtos extends BaseSchema {
  protected tableName = 'produtos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('tenant_id').notNullable()

      table.string('codigo').notNullable().unique()
      table.string('nome')
      table.string('secao')
      table.string('grupo')
      table.string('subgrupo')
      table.string('composicao')
      table.string('formavenda')
      table.string('unidade')
      table.string('tributacao')
      table.string('ncm')
      table.string('cest')
      table.string('piscofins')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
