module.exports = function (sequelize, DataTypes){
  const Products = sequelize.define('Products', {
    Image: {
        type: DataTypes.STRING,
        allowNull: false
    },
      Department: {
          type: DataTypes.STRING,
          allowNull: false
      },
     Item: {
          type: DataTypes.STRING,
          allowNull: false
      },
        Price: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      InStock: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
  }, 
  {timestamps:false});
  return Products;
}