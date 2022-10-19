module.exports = (sequelize, DataTypes) => {
    const PetGallery = sequelize.define("PetGallery", {
      petImgID : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      petID : {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ImagePath: {
        type: DataTypes.STRING,
        allowNull: true,
      },
  
    },{

      timestamps: false,
      freezeTableName: true
    }
    );
    PetGallery.associate = (models) => {
        PetGallery.belongsTo(models.Pets, {
            foreignKey: 'petID',          
            onDelete: "cascade",
            onUpdate: "cascade",
        });
    };
    
    return PetGallery;
  };
  