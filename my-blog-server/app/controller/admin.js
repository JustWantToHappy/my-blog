const { Controller } = require("egg");
class AdminController extends Controller {
    async login() {
        const { ctx, app, service } = this;
        const data = ctx.request.body;
        const { account, password } = data;
        const token = app.jwt.sign({ account }, app.config.jwt.secret, { expiresIn: `${24 * 60 * 60}s` });
        const admin = await service.admin.login(account, password);
        if (admin) {
            ctx.body = {
                code: "success",
                data: "登录成功!",
                message: token
            };
        } else {
            ctx.body = {
                code: "fail",
                data: "登录失败",
                message: ""
            }
        }
    }
}
module.exports = AdminController;