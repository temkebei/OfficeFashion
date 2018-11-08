
    module.exports = function (sequelize,dataTypes){
        const users = sequelize.define('users',{
            Name:{
                type: dataTypes.STRING,
                allowNull:false
            },
            Address: {
                            type: dataTypes.STRING,
                            allowNull:false
                        },
                        Email: {
                            type: dataTypes.STRING,
                            allowNull:false
                        },
                        Phone: {
                            type: dataTypes.STRING,
                            allowNull:false 
                        },
                        Password: {
                            type: dataTypes.STRING,
                            allowNull:false 
                        },
        },
    {timestamps:false});
    return users;
  
}