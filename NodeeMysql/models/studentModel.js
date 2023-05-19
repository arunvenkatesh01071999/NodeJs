module.exports = (sequelize, DataTypes) => {

    const Student = sequelize.define("students", {
       
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER
        },
        phNo: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        }
    
    },{
        timestamps:false
    })

   

    return Student

}