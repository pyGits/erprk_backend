"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Ncm_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Ncm"));
class NcmSeeder extends Seeder_1.default {
    async run() {
        await Ncm_1.default.createMany([
            {
                codigo: '19059090',
                descricao: 'NCM 1',
                aliquota: 10,
            },
            {
                codigo: '12345678',
                descricao: 'NCM 2',
                aliquota: 10,
            },
        ]);
    }
}
exports.default = NcmSeeder;
//# sourceMappingURL=Ncm.js.map