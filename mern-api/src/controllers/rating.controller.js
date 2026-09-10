
const ratingService = require('../services/rating.service.js');

const createRating=async (req, res) => {
  const user = req.user
  const reqBody = req.body;
  try {
    
    const rating =await ratingService.createRating(reqBody, user);
    
 // return  res.status(202).json(rating);
  return  res.status(202).send(rating);
  } catch (error) {
    //res.status(500).json({ error: 'Something went wrong' });
   return res.status(500).send({ error: 'Something went wrong' });
  }
};

/* const getProductsRating=async (req, res) => {
  try {
    const productId = req.params.productId;
    const ratings =await ratingService.getProductsRating(productId);
    res.status(200).json(ratings);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
}; */

const getAllRatings=async (req, res) => {
  const productId = req.params.productId;
  const user=req.user;
  try {
    const ratings =await ratingService.getAllRatings(productId);
 //   res.status(200).json(ratings);
   return res.status(200).send(ratings);
  } catch (error) {
   // res.status(500).json({ error: 'Something went wrong' });
   return res.status(500).send({ error: 'Something went wrong' });
  }
};

//module.exports = {getProductsRating,createRating}
module.exports = {getAllRatings,createRating}
