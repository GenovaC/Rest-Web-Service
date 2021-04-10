module.exports = (sequelize, type) => {
    return sequelize.define('pet', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        ownerName: type.STRING,
        specie: type.STRING,
        breed: type.STRING,
        age: type.INTEGER
    })
}