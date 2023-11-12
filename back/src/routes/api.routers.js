const router = require("express").Router();

// Importando os controladores e middlewares necessários
const userController = require("../controllers/user.controller");
const clientController = require("../controllers/client.controller");
const sectorController = require("../controllers/sector.controller");
const ticketController = require("../controllers/ticket.controller");

const accessMiddleware = require("../middlewares/access.middleware");

// USER
router.route(["/user", "/user/:id"]).get(userController.read);
router.route("/user/login").post(userController.login);
router.route("/user").post(userController.register);
router
  .route(["/user", "/user/:id"])
  .put(accessMiddleware.auth, userController.update);
router.route("/user").delete(userController.delete);

// SECTOR
router.route(["/sector", "/sector/:id"]).get(sectorController.read);
router.route("/sector").post(sectorController.create);
router.route("/sector/:id").put(sectorController.update);
router.route("/sector/:id").delete(sectorController.delete);

// CLIENT
router.route(["/client", "/client/:id"]).get(clientController.read);
router.route("/client").post(clientController.create);
router.route("/client/:id").put(clientController.update);
router.route("/client/:id").delete(clientController.delete);

// TICKET
router.route(["/ticket", "/ticket/:id"]).get(ticketController.read);
router.route("/ticket").post(ticketController.create);
router.route("/ticket/:id").put(ticketController.update);
router.route("/ticket/:id").delete(ticketController.delete);

module.exports = router;
