//have the server be on the same level as src and node_modules

// boiler plate code for every backend server
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;
//boiler plate code end, the sequelize code could change depending on where it is, but pretty much boiler plate as well

const sequelize = require('./sequelize');
const bcrypt = require('bcrypt');

// middleware boiler plate stuff
app.use(express.json());
app.use(cors());

//put endpoints here
app.post('/register', async (req, res) => {
    const {username, name, password} = req.body;
    const checkUser = await sequelize.query(`
        select * from users 
        where username = '${username}'
    `)

    console.log(checkUser);
    // if (checkUser[1].rowCount !== 0) {
    //     res.status(500).send('Username already exists')
    // } else {
    //     const salt = bcrypt.genSaltSync(10);
    //     const passwordHash = bcrypt.hashSync(password, salt);
    //     await sequelize.query(`
    //     insert into users(name, username, password)
    //     values ('${name}', '${username}', '${passwordHash}')
    //     `)

    //     const userInfo = await sequelize.query(`
    //         select id, username, name from users
    //         where username = '${username}'
    //     `)

    //     res.status(200).send(userInfo)
    // }
})


// sequelize.authenticate();

//boilerplate for server check
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});


