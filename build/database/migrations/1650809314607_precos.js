"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Precos extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'precos';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('tenant_id').notNullable();
            table.integer("loja");
            table.float("preco");
            table.float("custo");
            table.float("margem");
            table.string("codigoproduto").references("produtos.codigo").onDelete('CASCADE');
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true }).defaultTo(this.now());
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Precos;
//# sourceMappingURL=1650809314607_precos.js.map