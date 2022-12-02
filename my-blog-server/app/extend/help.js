const bcrypt = require("bcryptjs");
module.exports = {
    /**
     * 
     * @param {string} password 加密
     */
    encrypt(password) {
        
    },
    /**
     * 
     * @param {string} password 
     * @param {string} hash 
     * 对比生成的hash和用户携带的token字段是否一致
     */
    compare(password, hash) {
        return bcrypt.compareSync(password, hash);
    }
}