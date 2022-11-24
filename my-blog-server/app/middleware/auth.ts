/**
 * @description 全局中间件，拦截非法请求，放行合法请求
 */
module.exports = function () {
    return async (ctx, next) => {
        console.log("全局拦截器",ctx);
        await next();
    }
}