module.exports = (sequelize, DataTypes) => {
    const PetMedications = sequelize.define("PetMedications", {
      petMedID : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      medID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      timesADay: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      days: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },{

      timestamps: false,
      freezeTableName: true
    }
    );
    PetMedications.associate = (models) => {
        PetMedications.belongsTo(models.Pets, {
          foreignKey: 'petID',
          onDelete: "cascade",
          onUpdate: "cascade",
        });
        PetMedications.belongsTo(models.Medicines, {
            foreignKey: 'medID',
            onDelete: "cascade",
            onUpdate: "cascade",
        });
      };
    return PetMedications;
  };
  