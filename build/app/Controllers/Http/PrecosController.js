"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Produto_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Produto"));
const Preco_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Preco"));
class PrecosController {
    async store({ request, params, response }) {
        const body = request.body();
        const codigoproduto = params.codigoproduto;
        await Produto_1.default.findByOrFail('codigo', codigoproduto);
        body.codigoproduto = codigoproduto;
        const preco = await Preco_1.default.create(body);
        response.status(201);
        return {
            message: 'Preço adicionado com sucesso',
            data: preco,
        };
    }
    async update({ request, params }) {
        const body = request.body();
        const preco = await Preco_1.default.query()
            .where('codigoproduto', params.codigoproduto)
            .andWhere('loja', body.loja)
            .firstOrFail();
        preco.preco = body.preco;
        preco.custo = body.custo;
        preco.margem = body.margem;
        await preco.save();
        return {
            message: 'Preco atualizado com sucesso !',
            data: preco,
        };
    }
    async show({ params }) {
        const preco = await Preco_1.default.query()
            .where('codigoproduto', params.codigoproduto)
            .andWhere('id', params.id)
            .preload('lojas')
            .firstOrFail();
        return {
            data: preco,
        };
    }
    async index({ params }) {
        const preco = await Preco_1.default.query().where('codigoproduto', params.codigoproduto).preload('lojas');
        return {
            data: preco,
        };
    }
}
exports.default = PrecosController;
//# sourceMappingURL=PrecosController.js.map