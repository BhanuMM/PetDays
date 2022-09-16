module.exports = (sequelize, DataTypes) => {
    const Publishedads = sequelize.define("Publishedads", {
      adId : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      adTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      adDescr: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      adImage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      adPrice: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      adContact: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      adEmail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      adAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      adProvince: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      adDistrict: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      adStatus: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      adDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      adTime: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      
      
    },{
      timestamps: false,
      freezeTableName: true
    }
    );
  
    Publishedads.associate = (models) => {
      Publishedads.belongsTo(models.Users, {
          foreignKey: 'userId',
          onDelete: "cascade",
          onUpdate: "cascade",
        });
      };
    return Publishedads;
  };
  