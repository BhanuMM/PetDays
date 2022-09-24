module.exports = (sequelize, DataTypes) => {
    const Forumposts = sequelize.define("Forumposts", {
      postId : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      postTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postDescr: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postStatus: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      postTime: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      pcatId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
    },{
      timestamps: false,
      freezeTableName: true
    }
    );
  
    Forumposts.associate = (models) => {
      Forumposts.belongsTo(models.Users, {
          foreignKey: 'userId',
          onDelete: "cascade",
          onUpdate: "cascade",
        });
      };
      Forumposts.associate = (models) => {
        Forumposts.belongsTo(models.Petcatagories, {
            foreignKey: 'pcatId',
            onDelete: "cascade",
            onUpdate: "cascade",
          });
        }
    return Forumposts;
  };
  