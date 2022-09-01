module.exports = (sequelize, DataTypes) => {
    const Petcatagories = sequelize.define("Petcatagories", {
      pcatID : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      pcatName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descr: {
        type: DataTypes.STRING,
        allowNull: false,
      },
        // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
    });
  
    // Users.associate = (models) => {
    //   Users.hasMany(models.Posts, {
    //     onDelete: "cascade",
    //   });
    // };
    return Petcatagories;
  };
  