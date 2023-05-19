module.exports = (sequelize, DataTypes) => {

    const Mark = sequelize.define("marks", {
        rating: {
            type: DataTypes.INTEGER
        }
    },{
        timestamps:false
    })

    return Mark

}