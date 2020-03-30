import mongoose from 'mongoose'

interface TokenModel{
    access: string
    token: string
}

export interface UserModel extends mongoose.Document{
    _id: mongoose.Types.ObjectId
    f_name: string
    l_name: string
    email: string
    tokens: TokenModel[]
}