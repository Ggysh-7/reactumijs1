import { message } from 'antd';
import './utils/init-leancloud-sdk'
import {history} from 'umi'
import HeaderDropMenu from './components/HeaderDropMenu';

// 异步请求运行时配置
export const request = {
    requestInterceptors:[//请求拦截
        (url,options) => {
            //请求线上数据leancloud
            options.url = 'https://i24r1olv.lc-cn-n1-shared.com/1.1' + url
            options.headers = {
                "X-LC-Id": "I24R1OLVphUn3cL24nEhtsIo-gzGzoHsz" ,
                "X-LC-Key": "QvV0jWLk8fF2l2nxlIwA1J9a" ,
                "Content-Type": "application/json" 
            }
            return options
        }
    ],
    responseInterceptors:[//响应拦截
        async(response,options) => {
            let res = await response.json()
            if (res.objectId) {
                let method = options.method.toLowerCase()
                if(method=='post'&&res.sessionToken){
                    message.success('登陆成功')
                }else{
                    let msg = method=='post'?'新增成功':'更新成功'
                    message.success(msg);
                }
            }
            let {results} = res
            let data = results ? results : res
            return {data}
        }
    ]
}

export async function getInitialState(){
    let userState = {
        isLogin:false,
        userInfo:null
    }
    let info = localStorage.getItem('userInfo') || sessionStorage.getItem('userInfo')
    if(info){
        userState = {
            isLogin:true,
            userInfo:JSON.parse(info)
        }
    }
    console.log('getInitialState',userState);
    return userState;
}

export const layout = ({initialState})=>{
    return {
        onPageChange:()=>{
            // console.log('onPageChange',initialState);
            let {isLogin} = initialState
            if(!isLogin){
                history.push('./login')
            }
        },
        rightContentRender:()=><HeaderDropMenu/>
    }
}