const Service = require("egg").Service;
// 管理员
class AdminService extends Service {
    /**
     * 
     * @param {string} account 
     * @param {string} password 
     * @returns 
     */
    async login(account, password) {
        try {
            const { ctx } = this;
            const admin = await ctx.model.Admin.findOne({ account, password });
            return admin;
        } catch (err) {
            console.log(err);
            return null;
        }
    }
}
module.exports = AdminService;