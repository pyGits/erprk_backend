"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Loja_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Loja"));
class LojasController {
    async store({ request, response }) {
        const body = request.body();
        const loja = await Loja_1.default.create(body);
        response.status(201);
        return {
            msg: "Loja criada com sucesso!",
            data: loja,
        };
    }
    async index() {
        const loja = await Loja_1.default.all();
        return {
            data: loja,
        };
    }
}
exports.default = LojasController;
//# sourceMappingURL=LojasController.js.map