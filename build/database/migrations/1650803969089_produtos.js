"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Produtos extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'produtos';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('tenant_id').notNullable();
            table.string('codigo').notNullable().unique();
            table.string('nome');
            table.string('secao');
            table.string('grupo');
            table.string('subgrupo');
            table.string('composicao');
            table.string('formavenda');
            table.string('unidade');
            table.string('tributacao');
            table.string('ncm');
            table.string('cest');
            table.string('piscofins');
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true }).defaultTo(this.now());
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Produtos;
//# sourceMappingURL=1650803969089_produtos.js.map