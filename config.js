var config = {
    baseUrl : "http://localhost:8080",
    APP_ID : 803289859781288,
    database: process.env.MONGO_URI || 'localhost:27017/fantasyPolitics'
}

module.exports = config;
