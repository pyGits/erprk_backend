"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Loja_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Loja"));
class LojaSeeder extends Seeder_1.default {
    async run() {
        await Loja_1.default.createMany([{
                tenant_id: '555',
                cnpj: '08115094000156',
                loja: 'RK Solutions',
            }, {
                tenant_id: '555',
                cnpj: '08115094000159',
                loja: 'Reginaldo Solutions',
            },
        ]);
    }
}
exports.default = LojaSeeder;
//# sourceMappingURL=Loja.js.map