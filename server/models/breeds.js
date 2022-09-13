module.exports = (sequelize, DataTypes) => {
    const Breeds = sequelize.define("Breeds", {
      breedID : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      breedName: {
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
  
    Breeds.associate = (models) => {
      Breeds.belongsTo(models.Petcatagories, {
        foreignKey: 'catId',
        onDelete: "cascade",
      });
    };
    return Breeds;
  };
  