import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Preco from './Preco'

export default class Produto extends BaseModel {
  @hasMany(() => Preco, {
    localKey: 'codigo',
    foreignKey: 'codigoproduto',
  })
  public precos: HasMany<typeof Preco>

  @column({ isPrimary: true })
  public id: number

  @column()
  public tenant_id: string

  @column()
  public codigo: string

  @column()
  public nome: string

  @column()
  public secao: string

  @column()
  public grupo: string

  @column()
  public subgrupo: string

  @column()
  public composicao: string

  @column()
  public formavenda: string

  @column()
  public unidade: string

  @column()
  public tributacao: string
  @column()
  public ncm: string
  @column()
  public cest: string
  @column()
  public piscofins: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
