module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
      userID : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userrole: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isverified: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    // Users.associate = (models) => {
    //   Users.hasMany(models.Posts, {
    //     onDelete: "cascade",
    //   });
    // };
    return Users;
  };
  