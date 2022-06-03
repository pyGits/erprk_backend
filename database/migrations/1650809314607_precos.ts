import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Precos extends BaseSchema {
  protected tableName = 'precos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('tenant_id').notNullable();
      table.string("loja").notNullable();

      table.float("preco")


      table.string("codigoproduto").references("produtos.codigo").onDelete('CASCADE');
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
