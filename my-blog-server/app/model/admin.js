module.exports = app => {
    const { INTEGER, STRING, DATE } = app.Sequelize;
    //管理员模型
    const Admin = app.model.define("admin", {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name: STRING,
        avatar: STRING,
        gender: INTEGER,
        email: STRING,
        birthday: DATE,
        account: STRING,
        password: STRING
    })
    return Admin;
}