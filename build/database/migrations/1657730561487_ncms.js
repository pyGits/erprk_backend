"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Ncms extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'ncms';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('codigo').unique();
            table.string('descricao');
            table.float('aliquota');
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Ncms;
//# sourceMappingURL=1657730561487_ncms.js.map