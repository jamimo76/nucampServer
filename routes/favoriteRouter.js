const express = require("express");
const Favorite = require("../models/favorites");
const authenticate = require("../authenticate");
const cors = require("./cors");

const favoriteRouter = express.Router();

favoriteRouter
  .route("/")
  .options(cors.corsWithOptions, (req, res) => sendStatus(200))
  .get(cors.cors, authenticate.verifyUser,(req, res,next)=>)
  .post(cors.corsWithOptions, authenticate.verifyUser, )
  .put(cors.corsWithOptions, authenticate.verifyUser, )
  .delete(cors.corsWithOptions, authenticate.verifyUser,);
favoriteRouter
  .route("/:campsiteId")
  .options(cors.corsWithOptions, (req, res) => sendStatus(200))
  .get(cors.cors, aut)
  .post(cors.corsWithOptions, authenticate.verifyUser, )
  .put(cors.corsWithOptions, authenticate.verifyUser, )
  .delete(cors.corsWithOptions, authenticate.verifyUser, )
module.exports = favoriteRouter;
