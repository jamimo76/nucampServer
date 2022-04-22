const express = require("express");
const Favorite = require("../models/favorites");
const authenticate = require("../authenticate");
const cors = require("./cors");

const favoriteRouter = express.Router();

favoriteRouter
  .route("/")
  .options(cors.corsWithOptions, (req, res) => sendStatus(200))
  .get(cors.cors, authenticate.verifyUser,(req, res,next)=>{
    Favorite.find( { user: req.user._id })
      .populate('user')
      .populate('campsites')
      .then((favorite) => res.status(200).json(favorite))
      .catch((err)=> next(err));
  .post(cors.corsWithOptions, authenticate.verifyUser, (req,res));
  .put(cors.corsWithOptions, authenticate.verifyUser, );
  .delete(cors.corsWithOptions, authenticate.verifyUser, );

favoriteRouter
  .route("/:campsiteId")
  .options(cors.corsWithOptions, (req, res) => sendStatus(200))
  .get(cors.cors, aut)
  .post(cors.corsWithOptions, authenticate.verifyUser, )
  .put(cors.corsWithOptions, authenticate.verifyUser, )
  .delete(cors.corsWithOptions, authenticate.verifyUser, )


module.exports = favoriteRouter;
