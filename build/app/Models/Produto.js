"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
const Orm_1 = global[Symbol.for('ioc.use')]("Adonis/Lucid/Orm");
const Preco_1 = __importDefault(require("./Preco"));
class Produto extends Orm_1.BaseModel {
}
__decorate([
    (0, Orm_1.hasMany)(() => Preco_1.default, {
        localKey: 'codigo',
        foreignKey: 'codigoproduto',
    }),
    __metadata("design:type", Object)
], Produto.prototype, "precos", void 0);
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], Produto.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Produto.prototype, "tenant_id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Produto.prototype, "codigo", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Produto.prototype, "nome", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Produto.prototype, "secao", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Produto.prototype, "grupo", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Produto.prototype, "subgrupo", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Produto.prototype, "composicao", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Produto.prototype, "formavenda", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Produto.prototype, "unidade", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Produto.prototype, "tributacao", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Produto.prototype, "ncm", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Produto.prototype, "cest", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Produto.prototype, "piscofins", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Produto.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Produto.prototype, "updatedAt", void 0);
exports.default = Produto;
//# sourceMappingURL=Produto.js.map