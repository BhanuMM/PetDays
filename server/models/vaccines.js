module.exports = (sequelize, DataTypes) => {
    const Vaccines = sequelize.define("Vaccines", {
      vacID : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      vacName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descr: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vacNextIter: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      

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
    return Vaccines;
  };
  