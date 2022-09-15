module.exports = (sequelize, DataTypes) => {
    const Rejectedads = sequelize.define("Rejectedads", {
      rejadId : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      rejReason: {
        type: DataTypes.STRING,
        allowNull: false,
      }
      
      
    },{
      timestamps: false,
      freezeTableName: true
    }
    );
  
    Rejectedads.associate = (models) => {
      Rejectedads.belongsTo(models.Publishedads, {
          foreignKey: 'adId',
          onDelete: "cascade",
          onUpdate: "cascade",
        });
      };
    return Rejectedads;
  };
  