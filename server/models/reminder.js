module.exports = (sequelize, DataTypes) => {
    const PetReminders = sequelize.define("PetReminders", {
      petRemID : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      petID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      
      note: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nextRemDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      nextRemTime: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      
      

    },{

      timestamps: false,
      freezeTableName: true
    }
    );
  
    PetReminders.associate = (models) => {
        PetReminders.belongsTo(models.Pets, {
          foreignKey: 'petID',
          onDelete: "cascade",
          onUpdate: "cascade",
        });
        
      };
    return PetReminders;
  };
  