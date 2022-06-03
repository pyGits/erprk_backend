import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Catalogs extends BaseSchema {
  protected tableName = 'catalogs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('tenant_id').unique().notNullable();

      table.string('user').unique().notNullable();
      table.string('password').unique().notNullable();

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
