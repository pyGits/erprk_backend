import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Loja from './Loja'

export default class Preco extends BaseModel {
  @hasOne(() => Loja, {
    localKey: 'loja',
    foreignKey: 'id',
  })
  public lojas: HasOne<typeof Loja>

  @column({ isPrimary: true })
  public id: number

  @column()
  public tenant_id: string

  @column()
  public codigoproduto: string

  @column()
  public loja: number

  @column()
  public preco: string

  @column()
  public custo: string

  @column()
  public margem: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
