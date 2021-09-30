export default {
    port: 5000,
    host: 'localhost',
    saltWorkFactor: 10,
    accessTokenTtl: '15m',
    refreshTokenTtl: "1y",
    privateKey: `${process.env.JWT_PRIVATE_KEY}`,
    dbUri: `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.oaal4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
}