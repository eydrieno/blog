const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  createPost,
  updatePost,
  getPost,
  deletePost,
} = require("../controllers/posts");
// const { getUser } = require("../controllers/users");

router.route("/").get(getAllPosts).post(createPost);
router.route("/:id").patch(updatePost).get(getPost).delete(deletePost);
// router.route("/").post(getUser);

module.exports = router;
