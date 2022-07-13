"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tributacao_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Tributacao"));
class TributacaosController {
    async index({ response }) {
        const tributacoes = await Tributacao_1.default.all();
        if (tributacoes) {
            response.status(200).json({ data: tributacoes, status: 200 });
        }
        else {
            response.status(404).json({ data: {}, status: 404 });
        }
    }
    async show({ response, params }) {
        const tributacao = await Tributacao_1.default.findBy('codigo', params.id);
        if (tributacao) {
            response.status(200).json({ data: tributacao });
        }
        else {
            response.status(404).json({ data: {}, status: 404 });
        }
    }
}
exports.default = TributacaosController;
//# sourceMappingURL=TributacaosController.js.map