import { Router } from 'express';
import User from '../models/User.js'
const userRouter = Router()

// Create user /user can register
userRouter.post('/register', async (req, res, next) => {
    try {
        const newUser = await User.create(req.body)
        console.log(newUser)
        res.status(201).json('User created Successfully!')
    } catch (error) {
        error.status = 400
        next(error)
    }
})

//to get all of users
userRouter.post('/login', async (req, res, next) => {
   try {
    const user = await User.find({username: req.body.username })
    console.log(user)
    res.status(200).json(user)
   } catch (error) {
    error.status = 404
    next(error)
   }
    

});
//patch so users can update info
userRouter.patch('/:id', async (req, res) => {
    try{
    res.json(await Client.findByIdAndUpdate(req.params.id, req.body))
    }catch(error){
        error.status = 404

    }
});

userRouter.delete('/:id', async (req, res) => {
    try {
        const result = await Client.deleteOne({_id: req.params.id});
        if (result.deletedCount === 0) {
                return res.status(404).json({ error: 'User not found' });
            }
        console.log(req.params.id)
        res.json('Client deleted Successfully!')
    } catch (error) {
    }
});




export default userRouter;