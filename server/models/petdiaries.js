module.exports = (sequelize, DataTypes) => {
    const PetDiaries = sequelize.define("PetDiaries", {
      entyID : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      
      updateDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      entryTitle: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Descr: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      petID : {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
      
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
  