module.exports = (sequelize, DataTypes) => {
  const Result = sequelize.define("Result", {
    gigiLubang: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gigiHilang: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gigiTambal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalDebris: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalCalculus: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    indeksKebersihanGigi: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    kategori: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Result.associate = (models) => {
    Result.belongsTo(models.User);
  };

  return Result;
};
