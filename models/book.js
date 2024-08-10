import { Sequelize } from "sequelize";
import dbconfig from "../config/dbconfig.js";

// Creating DB connection
const sequelize = new Sequelize(dbconfig.booksPostgresURI, {
    dialect: "postgres"
});

sequelize.authenticate()
    .then(() => {
        console.log('DB Connected Successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to database', err);
    });

const BookSchema = sequelize.define('book', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING
    },
    authorName: {
        type: Sequelize.STRING
    },
    releaseDate: {
        type: Sequelize.DATE
    }
});

// BookSchema.sync({ alter: true });

export default BookSchema;
