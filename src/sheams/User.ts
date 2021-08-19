import mongoose, {Schema} from "mongoose";
import isEmail from 'validator/lib/isEmail';

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

const User = mongoose.model('User', UserShema);


export default User;
