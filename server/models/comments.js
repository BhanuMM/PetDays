module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define("Comments", {
    commentBody: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Comments.associate = (models) => {
    Comments.belongsTo(models.Forumposts, {
        foreignKey: 'postId',
        onDelete: "cascade",
        onUpdate: "cascade",
      });
      Comments.belongsTo(models.Users, {
        foreignKey: 'userId',
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    };
  return Comments;
};