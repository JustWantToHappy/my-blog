/**
 * 判断请求是否合法,post请求需要权限，get请求不需要
 */
module.exports = options => {
    return async function (ctx, next) {
        const { header: { authorization }, method} = ctx.request;
        if (authorization && method === "POST") {
            await next();
        } else if (method==="GET") {
            await next();
        } else {
            ctx.body = "dashabi"
            return;
        }
    }
}