import { Router } from 'express';
import User from '../models/User.js'
const userRouter = Router()
import Favorite from '../models/favorites.js';

// Create user /user can register. Then their information is stored in my mongoose database. Then they can lo
//log in after registration.
userRouter.post('/register', async (req, res, next) => {
    try {
        console.log(req.body)
        const newUser = await User.create(req.body)
        console.log(newUser)
        res.status(201).json('User created Successfully!')
    } catch (error) {
        error.status = 400
        next(error)
    }
})

//to get all of user after login. Also there's a code in front end that track user activity on website
userRouter.post('/login', async (req, res, next) => {
   try {
    const user = await User.findOne({username: req.body.username })
    console.log('user:',user)
    res.status(200).json({userId:user._id})
   } catch (error) {
    error.status = 404
    next(error)
   }
    

});
//Allow user to delete and remove plants from their favorite list.

userRouter.delete('/:userId', async (req, res, next) => {
  try {
    console.log('req ', req.params);
    const deleteFavorites = await Favorite.find({userId: req.params.userId});
    //console.log(newFav);
    res.status(201).json(deleteFavorites);
  } catch (error) {
    error.status = 400;
    next(error);
  }
});
userRouter.post('/add', async (req, res, next) => {
  try {
    console.log('req ', req.body);
    const newFav = await Favorite.create(req.body);
    console.log(newFav);
    res.status(201).json('Favorite created Successfully!');
  } catch (error) {
    error.status = 400;
    next(error);
  }
})
userRouter.get('/:userId', async (req, res, next) => {
  try {
    console.log('req ', req.params);
    const userFavorites = await Favorite.find({userId: req.params.userId});
    //console.log(newFav);
    res.status(201).json(userFavorites);
  } catch (error) {
    error.status = 400;
    next(error);
  }
})


export default userRouter;