module.exports = (sequelize, DataTypes) => {

    const Standard = sequelize.define("standards", {
        standard: {
            type: DataTypes.STRING
        }
    },{
        timestamps:false
    })

    return Standard

}