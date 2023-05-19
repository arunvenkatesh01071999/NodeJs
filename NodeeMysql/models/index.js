const dbConfig = require('../config/dbConfig.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle

        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.students = require('./studentModel.js')(sequelize, DataTypes)
db.marks = require('./markModel.js')(sequelize, DataTypes)
db.standards = require('./standardModel.js')(sequelize, DataTypes)


db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})

db.students.hasMany(db.marks, {
    foreignKey: 'student_id',
    as: 'marks'
})

db.marks.belongsTo(db.students, {
    foreignKey: 'student_id',
    as: 'students'
})

db.students.hasMany(db.standards, {
    foreignKey: 'student_id',
    as: 'standards'
})

db.standards.belongsTo(db.students, {
    foreignKey: 'student_id',
    as: 'students'
})






module.exports = db