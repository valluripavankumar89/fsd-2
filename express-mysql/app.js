const express = require("express");
const mysql = require("mysql2");

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "expressdb",
});

db.connect((err) => {
    if (err) {
        console.error("MySQL connection failed:", err.message);
        return;
    }

    console.log("MySQL connected successfully!");
});

app.get("/", (req, res) => {
    res.send("Express + MySQL is working!");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
