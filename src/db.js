const Sequelize = require('sequelize');

const PetModel = require('./models/pets');
const UserModel = require('./models/users');

const sequelize = new Sequelize(
    'pets_example',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
        operatorAliases: false
    }
);

const Pet = PetModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

sequelize.sync({force: false})
            .then( () => {
                console.log('Tablas sincronizadas');
            })

module.exports = {
    Pet,
    User
}