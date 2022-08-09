import {request} from 'umi'

export const drinkAdd = (drinkObj)=>{
    return request('/classes/Drinkgory',{
        method:'POST',
        data:drinkObj
    })
}

export const drinkGet = ()=>{
    return request('/classes/Drinkgory',{
        method:'GET',
    })
}

export const bannerAdd = (bannerObj)=>{
    return request('/classes/DrinkBanner',{
        method:'POST',
        data:bannerObj
    })
}

export const bannerGet = ()=>{
    return request('/classes/DrinkBanner',{
        method:'GET',
    })
}

export const bannerUpdate = (objectId,bannerObj)=>{
    return request('/classes/DrinkBanner/${objectId}',{
        method:'PUT',
        data:bannerObj
    })
}

export const goodsAdd = (drinkObj)=>{
    return request('/classes/DrinkGoods',{
        method:'POST',
        data:drinkObj
    })
}