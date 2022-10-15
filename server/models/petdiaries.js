module.exports = (sequelize, DataTypes) => {
    const PetDiaries = sequelize.define("PetDiaries", {
      entyID : {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      petID : {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      updateDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      Title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      
    },{
      timestamps: false,
      freezeTableName: true
    }
    );
  
    PetDiaries.associate = (models) => {
      PetDiaries.belongsTo(models.Pets, {
          foreignKey: 'petID',
          onDelete: "cascade",
          onUpdate: "cascade",
        });
      };
    return PetDiaries;
  };
  