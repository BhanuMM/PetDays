module.exports = (sequelize, DataTypes) => {
    const Medicines = sequelize.define("Medicines", {
      medID : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      medName: {
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
  
    // Breeds.associate = (models) => {
    //   Breeds.hasMany(models.Posts, {
    //     onDelete: "cascade",
    //   });
    // };
    return Medicines;
  };
  