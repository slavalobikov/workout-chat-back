import mongoose from 'mongoose';
import express from 'express';
import bodyParser from "body-parser";


import User from './sheams/User';


const app = express();

/*
app.use(bodyParser.urlencoded({ extended: false }));
*/
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/chat',
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        });



app.post('/create',function (req:express.Request, res: express.Response) {

    const postData = {
        email: req.body.email,
        fullname: req.body.fullname,
        password: req.body.password,
    }

    const user = new User(postData);
    user.save().then((obj:any) => {
        res.json(obj)
        console.log('User created')
    }).catch(reason => {
        res.json(reason)
    });


})

app.listen(3000, function() {
    console.log('server is listen')
})