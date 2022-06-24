import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Tributacao extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public codigo:string

  @column()
  public tributacao:string
  @column()
  public icms:number
  @column()
  public cfop:number
  @column()
  public csosn:number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

