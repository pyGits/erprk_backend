"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Tributacao_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Tributacao"));
class TributacaoSeeder extends Seeder_1.default {
    async run() {
        await Tributacao_1.default.createMany([{
                codigo: 'F00',
                tributacao: "FONTE",
                icms: 0,
                cfop: 5405,
                csosn: 500,
            }, {
                codigo: 'T18',
                tributacao: "TRIBUTADO 18%",
                icms: 18,
                cfop: 5102,
                csosn: 102,
            },
        ]);
    }
}
exports.default = TributacaoSeeder;
//# sourceMappingURL=Tributacao.js.map