import mongoose, {Schema, Document} from "mongoose";
import isEmail from 'validator/lib/isEmail';

export interface IUser extends Document {
    email: string,
    fullname:string,
    password: string,
    confirmed: boolean,
    avatar: string,
    confirm_hash:string,
    last_seen:Date,


}

const UserShema = new Schema({
    email: {
        type: String,
        required: 'Email address is required',
        validate: [isEmail, 'Ivalid email'],
        unique: true,
    },
    avatar: String,
    fullname: {
        type: String,
        required: 'Fullname is required'
    },
    password: {
        type: String,
        required: 'Password is required'
    },
    confirmed: {
        type: Boolean,
        default: false
    },
    confirm_hash: String,
    last_seen: Date,

}, {
    timestamps:true,
})

const UserModel = mongoose.model<IUser>('User', UserShema);


export default UserModel;
