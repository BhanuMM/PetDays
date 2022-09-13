module.exports = (sequelize, DataTypes) => {
    const Dietplans = sequelize.define("Dietplans", {
      dietplanID : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      planName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      planDescr: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ageRangeFrom: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      ageRangeTo: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      weightRangeFrom: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      weightRangeTo: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      }
      

    },{

      timestamps: false,
      freezeTableName: true
    }
    );
  
    Dietplans.associate = (models) => {
      Dietplans.belongsTo(models.Breeds, {
        foreignKey: 'breedId',
        onDelete: "cascade",
      });
      Dietplans.belongsTo(models.Petcatagories, {
        foreignKey: 'catId',
        onDelete: "cascade",
      });
    };
    
    return Dietplans;
  };
  