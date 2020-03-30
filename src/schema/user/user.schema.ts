import mongoose, {Model} from 'mongoose'
import _ from 'lodash'
import { UserModel } from './user.typedef'

const userSchema = new mongoose.Schema({
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

userSchema.methods.toJSON = function(){
    return _.pick(this.toObject(), ['_id', 'f_name', 'l_name', 'email'])
}

export const User: Model<UserModel> = mongoose.model<UserModel>('User', userSchema)
