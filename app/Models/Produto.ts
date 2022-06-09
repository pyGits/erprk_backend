import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Preco from './Preco'

export default class Produto extends BaseModel {
  @hasMany(()=>Preco,{
    localKey:'codigo',
    foreignKey:'codigoproduto'
  })
  public precos: HasMany<typeof Preco>

  @column({ isPrimary: true })
  public id: number

  @column()
  public tenant_id:string

  @column()
  public codigo:string

  @column()
  public nome:string

  @column()
  public secao:string

  @column()
  public grupo:string

  @column()
  public subgrupo:string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
