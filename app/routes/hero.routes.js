
module.exports = app => {
    const heroes = require("../controllers/hero.controller.js");

    var router = require("express").Router();

    router.post("/", heroes.create);

    router.get("/", heroes.findAll);

    router.get("/published", heroes.findAllPublished);

    router.get("/:id", heroes.findOne);

    router.put("/:id", heroes.update);

    router.delete("/:id", heroes.delete);

    router.delete("/", heroes.deleteAll);

    app.use('/api/heroes', router);

};