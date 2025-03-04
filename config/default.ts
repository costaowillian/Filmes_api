const dbPassword = process.env.PASSWORD_DB;
const dbUser = process.env.USERNAME_DB;

export default {
    port: 3030,

    dbUri: `mongodb://${dbUser}:${dbPassword}@mongo:27017/`,
    env: "development",
}