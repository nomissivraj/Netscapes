module.exports = function(sequelize, Sequelize) {

    var Question = sequelize.define('question', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        Question: {
            type: Sequelize.STRING
        },
        Type: {
            type: Sequelize.STRING
        },
        Min: {
            type: Sequelize.INTEGER
        },
        Max: {
            type: Sequelize.INTEGER
        },
        Units: {
            type: Sequelize.STRING
        },
        Option1: {
            type: Sequelize.STRING
        },
        Option2: {
            type: Sequelize.STRING
        },
        Option3: {
            type: Sequelize.STRING
        },
        Option4: {
            type: Sequelize.STRING
        },
        Category: {
            type: Sequelize.STRING
        },
        Answer: {
            type: Sequelize.STRING
        },
        Source: {
            type: Sequelize.STRING
        },
    }, {
        timestamps: false
    });
    return Question;
}