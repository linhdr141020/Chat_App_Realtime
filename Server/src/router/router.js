import exppress from "express";
const router = exppress.Router();

router.get("/", (req, res) => {
  res.send({ response: "Server is running!!!" });
});
module.exports = router;
