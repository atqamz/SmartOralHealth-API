const express = require("express");
const router = express.Router();

const {
  index,
  store,
  show,
  update,
  destroy,
} = require("../controllers/result-controller");

router.get("/", index);
router.post("/", store);
router.get("/:id", show);
router.put("/:id", update);
router.delete("/:id", destroy);

module.exports = router;
