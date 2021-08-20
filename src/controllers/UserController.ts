import express from "express";

import {UserModel} from './../sheams';


class UserController {
    show(req: express.Request, res: express.Response) {
        const id: string = req.params.id;
        UserModel.findById(id, (err: any, user: any) => {
            if (err) {
                return res.status(404).json({
                    message: "Not found"
                })
            }
            res.json(user)
        })
    }

    getMe() {

    }

    create(req: express.Request, res: express.Response) {

        const postData = {
            email: req.body.email,
            fullname: req.body.fullname,
            password: req.body.password,
        }

        const user = new UserModel(postData);
        user.save().then((obj: any) => {
            res.json(obj)
            console.log('User created')
        }).catch(reason => {
            res.json(reason)
        });
    }

    delete(req: express.Request, res: express.Response) {
        const id: string = req.params.id;
        UserModel.findOneAndRemove({_id: id}, /*(err: any, user: any) => {
            if (err) {
                return res.status(404).json({
                    message: "Not found"
                })
            }
            res.json({
                message: `User deleted`
            })
        }*/ )
            .then((user: any) => {
                res.json({
                    message: `User ${user.fullname} delete`
                })
            }).catch((err : any) => {
                res.json({
                    message: err
                })
        })
    }
}

export default UserController;