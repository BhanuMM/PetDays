module.exports = (sequelize, DataTypes) => {
    const Vitamins = sequelize.define("Vitamins", {
      vitID : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      vitName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vitType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descr: {
        type: DataTypes.STRING,
        allowNull: false,
      }
      

    },{

      timestamps: false,
      freezeTableName: true
    }
    );
  
    // Breeds.associate = (models) => {
    //   Breeds.hasMany(models.Posts, {
    //     onDelete: "cascade",
    //   });
    // };
    return Vitamins;
  };
  