"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Loja_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Loja"));
const Preco_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Preco"));
const Produto_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Produto"));
class ProdutosController {
    async store({ request, response }) {
        const body = request.body();
        const produto = await Produto_1.default.create(body);
        body.precos?.map(async (pr) => {
            pr.codigoproduto = produto.codigo;
            await Preco_1.default.create(pr);
        });
        response.status(201);
        return {
            msg: 'Produto criado com sucesso!',
            data: produto,
        };
    }
    async index() {
        const produtos = await Produto_1.default.query().preload('precos');
        return {
            data: produtos,
        };
    }
    async show({ params }) {
        const produto = await Produto_1.default.findByOrFail('codigo', params.id);
        await produto.load('precos', (p) => {
            p.preload('lojas');
        });
        return {
            data: produto,
        };
    }
    async destroy({ params }) {
        const produto = await Produto_1.default.findByOrFail('codigo', params.id);
        await produto.delete();
        return {
            message: 'Produto deletado com sucesso',
            data: produto,
        };
    }
    async update({ request, params }) {
        const body = request.body();
        const produto = await Produto_1.default.findByOrFail('codigo', params.id);
        produto.nome = body.nome;
        produto.secao = body.secao;
        produto.grupo = body.grupo;
        produto.subgrupo = body.subgrupo;
        produto.composicao = body.composicao;
        produto.formavenda = body.formavenda;
        produto.unidade = body.unidade;
        produto.tributacao = body.tributacao;
        produto.ncm = body.ncm;
        await Preco_1.default.updateOrCreateMany('id', body.precos);
        await Preco_1.default.updateOrCreateMany('tenant_id', body.precos);
        await Preco_1.default.updateOrCreateMany('custo', body.precos);
        await Preco_1.default.updateOrCreateMany('preco', body.precos);
        await Preco_1.default.updateOrCreateMany('margem', body.precos);
        await produto.save();
        return {
            message: 'Produto atualizado com sucesso !',
            data: produto,
        };
    }
    async novo({}) {
        const lojas = await Loja_1.default.all();
        let precos = new Array();
        lojas.forEach((loja) => {
            precos.push({
                loja: loja.id,
                preco: 0,
                custo: 0,
                margem: 0,
                codigoproduto: '1',
                lojas: loja,
                tenant_id: '555',
            });
        });
        const produto = {
            codigo: '1',
            nome: '',
            composicao: 'N',
            formavenda: 'N',
            unidade: 'UN',
            precos: precos,
            tributacao: 'F00',
        };
        return {
            message: 'Novo produto',
            data: produto,
        };
    }
}
exports.default = ProdutosController;
//# sourceMappingURL=ProdutosController.js.map