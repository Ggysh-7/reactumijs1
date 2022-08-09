import {request} from 'umi'

export const userLogin = (user)=>{
    return request('/login',{
        method:'POST',
        data:user
    })
}