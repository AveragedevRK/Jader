var router = require("express").Router;

var UserRouter = router();

function createUserRouter(service) {
    UserRouter.post("/", service.create.bind(service));
    UserRouter.get("/:id", service.get.bind(service));
    UserRouter.patch("/:id", service.update.bind(service));
    UserRouter.delete("/:id", service.delete.bind(service));
    return UserRouter;
}

module.exports = {
    createUserRouter
}