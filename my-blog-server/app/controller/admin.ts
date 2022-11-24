const Controller = require("egg").Controller;
/**
 * @description 后台管理Controller
 */
export default class AdminController extends Controller {
    public async login() {
        const { ctx } = this;
        ctx.body = 'sb';
    }
}