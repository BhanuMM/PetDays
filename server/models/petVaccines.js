module.exports = (sequelize, DataTypes) => {
    const PetVaccines = sequelize.define("PetVaccines", {
      petVacID : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      note: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nextVacDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      
      

    },{

      timestamps: false,
      freezeTableName: true
    }
    );
  
    PetVaccines.associate = (models) => {
        PetVaccines.belongsTo(models.Pets, {
          foreignKey: 'petID',
          onDelete: "cascade",
          onUpdate: "cascade",
        });
        PetVaccines.belongsTo(models.Vaccines, {
            foreignKey: 'vacID',
            onDelete: "cascade",
            onUpdate: "cascade",
        });
      };
    return PetVaccines;
  };
  