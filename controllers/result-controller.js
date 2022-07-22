const { Result } = require("../models");

const Validator = require("fastest-validator");
const v = new Validator();

const index = async (req, res) => {
  const results = await Result.findAll();

  res.status(200).json({
    message: "Success",
    data: results,
  });
};

const store = async (req, res) => {
  const schema = {
    gigiLubang: { type: "number", integer: true },
    gigiHilang: { type: "number", integer: true },
    gigiTambal: { type: "number", integer: true },
    total: { type: "number", integer: true },
    totalDebris: { type: "number", integer: true },
    totalCalculus: { type: "number", integer: true },
    indeksKebersihanGigi: { type: "number", integer: true },
    kategori: { type: "string" },
    UserId: { type: "number", positive: true, integer: true },
  };

  const check = v.compile(schema);
  const validate = check(req.body);

  if (validate !== true) {
    return res.status(400).json({
      message: "Invalid request",
      errors: validate,
    });
  }

  const result = await Result.create(req.body);

  return res.status(201).json({
    message: "Result created",
    data: result,
  });
};

const show = async (req, res) => {
  const { id } = req.params;

  const result = await Result.findByPk(id);

  if (!result) {
    res.status(404).json({
      message: "Result not found",
    });
  }

  res.status(200).json({
    message: "Success",
    data: result,
  });
};

const update = async (req, res) => {
  const { id } = req.params;

  let result = await Result.findByPk(id);

  if (!result) {
    return res.status(404).json({
      message: "Result not found",
    });
  }

  const schema = {
    gigiLubang: { type: "number", integer: true, optional: true },
    gigiHilang: { type: "number", integer: true, optional: true },
    gigiTambal: { type: "number", integer: true, optional: true },
    total: { type: "number", integer: true, optional: true },
    totalDebris: { type: "number", integer: true, optional: true },
    totalCalculus: { type: "number", integer: true, optional: true },
    indeksKebersihanGigi: { type: "number", integer: true, optional: true },
    kategori: { type: "string" },
    UserId: { type: "number", positive: true, integer: true, optional: true },
  };

  const check = v.compile(schema);
  const validate = check(req.body);

  if (validate !== true) {
    return res.status(400).json({
      message: "Invalid request",
      errors: validate,
    });
  }

  result = await result.update(req.body);

  return res.status(200).json({
    message: "Result updated",
    data: result,
  });
};

const destroy = async (req, res) => {
  const { id } = req.params;

  const result = await Result.findByPk(id);

  if (!result) {
    return res.status(404).json({
      message: "Result not found",
    });
  }

  await result.destroy();

  return res.status(200).json({
    message: "Result deleted",
  });
};

module.exports = { index, store, show, update, destroy };
