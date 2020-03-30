import _ from 'lodash'
import {User, UserModel} from '../../schema'
import { NoRecordsWithIdException } from '../../common/exceptions.common'

export class UserRepository{
    async save(data: UserModel){
        const user = new User(data)
        const savedUser = await user.save()
        return savedUser
    }

    async get(id: string){
        const user = await User.findById(id)
        if(!user) throw new NoRecordsWithIdException()
        return user
    }
}