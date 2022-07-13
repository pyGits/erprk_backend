"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Tributacaos extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'tributacaos';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('codigo').unique();
            table.string('tributacao');
            table.float('icms');
            table.integer('cfop');
            table.integer('csosn');
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Tributacaos;
//# sourceMappingURL=1656015723635_tributacaos.js.map