const mysql = require("mysql2");

// Create a connection to the database
const connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'testMySQL1',
    database: 'game_data'
});

//Open the MySQL connection
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

//Run given sql query
function useSQL(sql){
    connection.query(sql, function (err, res) {
        if(err) throw err;
    });
}

let output;
const setOutput = (rows) => {
    output = rows;
    console.log(output);
};

getUserData("game_resources");
function getUserData(table){
    connection.connect(async(err) => {
        if(err) throw err;
        let query = 'SELECT * FROM ' + table;
        connection.query(query, (err, rows) => {
            if(err) throw err;
            setOutput(rows);
        });
    });
}
//addUserData(3, "david", "bob");
function addUserData(id, username, password){ //, username, password
    let sql = "INSERT INTO user_data (id, username, password) VALUES ('" + id + "','" + username + "','" + password + "')";
    useSQL(sql);
}
//deleteUserData(3);
function deleteUserData(id){
    let sql = "DELETE FROM user_data WHERE id = " + id;
    useSQL(sql);
}
//updateUserData("password", "purpleNote", 0);
function updateUserData(column, newData, id){
    let sql = "UPDATE user_data SET " + column + " = '" + newData + "' WHERE id = " + id;
    useSQL(sql);
}
/*function printData() {
    Promise.resolve(console.log("Ending: " + output));
}
printData();*/

function print(){
    console.log("in mySQLConnect");
}
module.exports = { print };
//module.exports = { getUserData, addUserData, deleteUserData, updateUserData};