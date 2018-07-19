const admin = require("firebase-admin");

const db = admin.database();

module.exports.getData = () => db;