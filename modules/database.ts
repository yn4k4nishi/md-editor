import pgPromise from "pg-promise";

const pgp = pgPromise({});
const config = {
    connectionString: process.env.DB_URL,
    user: process.env.DB_USR,
    password: process.env.DB_PASS,
    max: 30
};

const db = pgp(config);