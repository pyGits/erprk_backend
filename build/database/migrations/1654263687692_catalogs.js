"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Catalogs extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'catalogs';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('tenant_id').unique().notNullable();
            table.string('user').unique().notNullable();
            table.string('password').unique().notNullable();
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Catalogs;
//# sourceMappingURL=1654263687692_catalogs.js.map