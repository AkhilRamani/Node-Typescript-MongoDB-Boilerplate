import mongoose, {Model} from 'mongoose'
import { UserModel } from './User.Typedef'

const UserSchema = new mongoose.Schema({
    f_name: String,
    l_name: String,
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    tokens: [{
        access: {
            type: String
        },
        token: {
            type: String
        }
    }]
})

const User: Model<UserModel> = mongoose.model<UserModel>('User', UserSchema)

export {User}
