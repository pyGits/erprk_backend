"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.get('/', async () => {
        return { hello: 'world' };
    });
    Route_1.default.get('/produtos/novo', 'ProdutosController.novo');
    Route_1.default.resource('/produtos', 'ProdutosController').apiOnly();
    Route_1.default.resource('/produtos/:codigoproduto/precos', 'PrecosController').apiOnly();
    Route_1.default.resource('/ncms', 'NcmsController').apiOnly();
    Route_1.default.resource('/lojas', 'LojasController').apiOnly();
    Route_1.default.resource('/tributacoes', 'TributacaosController').apiOnly();
}).prefix('/api');
//# sourceMappingURL=routes.js.map