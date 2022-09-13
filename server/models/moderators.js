module.exports = (sequelize, DataTypes) => {
    const Moderators = sequelize.define("Moderators", {
      modID : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      fisrtName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      conNum: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      modEmail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      modNIC: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      

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
    return Moderators;
  };
  