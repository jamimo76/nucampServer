const express = require("express");
const Favorite = require("../models/favorite");
const authenticate = require("../authenticate");
const cors = require("./cors");

const favoriteRouter = express.Router();

favoriteRouter
  .route("/")
  .options(cors.corsWithOptions, (req, res) => sendStatus(200))
  .get(cors.cors, authenticate.verifyUser, (req, res, next) => {
    Favorite.find({ user: req.user._id })
      .populate("user")
      .populate("campsites")
      .then((favorite) => res.status(200).json(favorite))
      .catch((err) => next(err));
  })

  .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    Favorite.findOne({ user: req.user._id }).catch((err) => next(err));
  })
  .put(cors.corsWithOptions, authenticate.verifyUser, (req, res) => {
    res.status(403).end("PUT operation not supported on /favorites");
  })
  .delete(cors.corsWithOptions, authenticate.verifyUser, (req, res) => {});

favoriteRouter
  .route("/:campsiteId")
  .options(cors.corsWithOptions, (req, res) => sendStatus(200))
  .get(cors.cors, authenticate.verifyUser, (req, res) => {
    res.status(403).end("GET not supported on /favorites/:campsiteId");
  })
  .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    Favorite.findById(req.params.campsiteId);
  })
  .put(cors.corsWithOptions, authenticate.verifyUser, (req, res) => {
    res.status(403).end("PUT not supported on /favorites/:campsiteId");
  })
  .delete(
    cors.corsWithOptions,
    authenticate.verifyUser,
    (req, res, next) => {}
  );

module.exports = favoriteRouter;
