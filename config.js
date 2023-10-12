/** Common config for bookstore. */


let DB_URI = `postgresql://postgres:1234567@localhost:5433/books`;

if (process.env.NODE_ENV === "test") {
  DB_URI = `${DB_URI}/books-test`;
} else {
  DB_URI = process.env.DATABASE_URL || `${DB_URI}`;
}


module.exports = { DB_URI };