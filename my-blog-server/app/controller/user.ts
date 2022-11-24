const Controller = require("egg").Controller;
/**
 * @description 前台用户Controller
 */
export default class UserController extends Controller {

    public async login() {
        const { ctx } = this;
        await ctx.render("index.html");
    }
    public async register() {
        
    }

}