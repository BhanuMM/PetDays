module.exports = (sequelize, DataTypes) => {
    const Petcatagories = sequelize.define("Petcatagories", {
      pcatID : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      pcatName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descr: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
  
    // Petcatagories.associate = (models) => {
    //   Petcatagories.hasMany(models.Breeds, {
    //     foreignKey: 'catId',
    //     onDelete: "cascade",
    //   });
    // };
    return Petcatagories;
  };
  