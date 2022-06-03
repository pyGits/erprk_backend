import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Loja extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public tenant_id:string

  @column()
  public cnpj:string

  @column()
  public loja:string


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
