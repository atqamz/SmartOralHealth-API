module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usia: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    jenisKelamin: {
      type: DataTypes.ENUM,
      values: ["pria", "wanita"],
    },
    namaSekolah: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alamatSekolah: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM,
      values: ["siswa", "guru", "orangtua"],
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Result);
  };

  return User;
};
