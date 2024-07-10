export default {
    port: 3030,
    dbPassword: process.env.PASSWORD_DB,
    dbUser: process.env.USERNAME_DB,
    dbUri: `mongodb://localhost:27017/`
}