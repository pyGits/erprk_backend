"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ncm_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Ncm"));
class NcMsController {
    async index({ response }) {
        const ncms = await Ncm_1.default.all();
        if (ncms) {
            response.status(200).json({ data: ncms, status: 200 });
        }
        else {
            response.status(404).json({ data: {}, status: 404 });
        }
    }
    async create({}) { }
    async store({}) { }
    async show({ response, params }) {
        const ncm = await Ncm_1.default.findBy('codigo', params.id);
        if (ncm) {
            response.status(200).json({ data: ncm });
        }
        else {
            response.status(404).json({ data: {}, status: 404 });
        }
    }
    async edit({}) { }
    async update({}) { }
    async destroy({}) { }
}
exports.default = NcMsController;
//# sourceMappingURL=NcmsController.js.map