import { DateTime } from 'luxon'
import { BaseModel, column,HasMany, hasMany} from '@ioc:Adonis/Lucid/Orm'
import Loja from './Loja'

export default class Preco extends BaseModel {
  @hasMany(()=>Loja,{
    localKey:'loja',
    foreignKey:'id'
  })
  public lojas: HasMany<typeof Loja>

  @column({ isPrimary: true })
  public id: number

  @column()
  public tenant_id:string

  @column()
  public codigoproduto:string

  @column()
  public loja:number

  @column()
  public preco:string

  @column()
  public custo:string

  @column()
  public margem:string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
