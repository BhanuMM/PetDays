module.exports = (sequelize, DataTypes) => {
    const Pets = sequelize.define("Pets", {
      petID : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      petName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      DOB: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
     
      weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      profileImage: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      
    },{

      timestamps: false,
      freezeTableName: true
    }
    );
  
    Pets.associate = (models) => {
        Pets.belongsTo(models.Breeds, {
          foreignKey: 'breedId',
          onDelete: "cascade",
          onUpdate: "cascade",
        });
        Pets.belongsTo(models.Users, {
            foreignKey: 'UserID',
            onDelete: "cascade",
            onUpdate: "cascade",
        });
        Pets.belongsTo(models.Petcatagories, {
          foreignKey: 'catId',
          onDelete: "cascade",
          onUpdate: "cascade",
        });
      };
    return Pets;
  };
  