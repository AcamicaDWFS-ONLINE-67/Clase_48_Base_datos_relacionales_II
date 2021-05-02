const router = require("express").Router();
const apiUsersRouter = require("./api/users");
const apiPostsRouter = require("./api/posts");
const apiCommentsRouter = require("./api/comments");

router.use("/users", apiUsersRouter);
router.use("/posts", apiPostsRouter);
router.use("/comments", apiCommentsRouter);

module.exports = router;