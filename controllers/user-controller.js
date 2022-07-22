const { User } = require("../models");

const Validator = require("fastest-validator");
const v = new Validator();

const index = async (req, res) => {
  const users = await User.findAll();

  res.status(200).json({
    message: "Success",
    data: users,
  });
};

const store = async (req, res) => {
  const schema = {
    nama: { type: "string" },
    usia: { type: "number", integer: true },
    jenisKelamin: { type: "enum", values: ["pria", "wanita"] },
    namaSekolah: { type: "string" },
    alamatSekolah: { type: "string" },
    status: { type: "enum", values: ["siswa", "guru", "orangtua"] },
  };

  const check = v.compile(schema);
  const validate = check(req.body);

  if (validate !== true) {
    return res.status(400).json({
      message: "Invalid request",
      errors: validate,
    });
  }

  const user = await User.create(req.body);

  return res.status(201).json({
    message: "User created",
    data: user,
  });
};

const show = async (req, res) => {
  const { id } = req.params;

  const user = await User.findByPk(id);

  if (!user) {
    res.status(404).json({
      message: "User not found",
    });
  }

  res.status(200).json({
    message: "Success",
    data: user,
  });
};

const update = async (req, res) => {
  const { id } = req.params;

  let user = await User.findByPk(id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const schema = {
    nama: { type: "string", optional: true },
    usia: { type: "number", integer: true, optional: true },
    jenisKelamin: { type: "enum", values: ["pria", "wanita"], optional: true },
    namaSekolah: { type: "string", optional: true },
    alamatSekolah: { type: "string", optional: true },
    status: { type: "enum", values: ["siswa", "guru", "orangtua"], optional: true },
  };

  const check = v.compile(schema);
  const validate = check(req.body);

  if (validate !== true) {
    return res.status(400).json({
      message: "Invalid request",
      errors: validate,
    });
  }

  user = await user.update(req.body);

  return res.status(200).json({
    message: "User updated",
    data: user,
  });
};

const destroy = async (req, res) => {
  const { id } = req.params;

  const user = await User.findByPk(id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  await user.destroy();

  return res.status(200).json({
    message: "User deleted",
  });
};

module.exports = { index, store, show, update, destroy };
