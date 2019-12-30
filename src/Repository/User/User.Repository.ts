import _ from 'lodash'
import {User} from '../../Schema'

export class UserRepository{
    async saveUser(data){
        const user = new User(data)
        const savedUser = await user.save()

        return _.pick(savedUser, ['email'])
    }
}