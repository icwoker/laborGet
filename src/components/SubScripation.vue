<template>
    <form>
    <div class="subscripation">
        <div class="official">
            <span>开启公众号推送</span>
            <input type="checkbox" name="" id="ququ" v-model="official">
            <label for="ququ"></label>
        </div>
        <div class="email">
            <span>开启邮箱推送</span>
            <input type="checkbox" name="" id="mumu" v-model="email">
            <label for="mumu"></label>
        </div>
        <div class="mail" v-show="email">
            <span>请输入邮箱号:</span>
            <input type="text" v-model="mail">
        </div>
    </div>
    <input type="submit" value="确定" id="comfirm" @click.prevent="getSet()">
    </form>
</template>

<script>
    import {ref,onMounted,onUpdated,} from 'vue';
    import axios from 'axios';
    import {} from 'vue-router'
export default {
    setup(){
        let official = ref(false);
        let email = ref(false);
        let mail = ref('');
        let dada = null;
        let codeture = ref('');
        const codeUrl = 'http://localhost:8080/wxLogin';
        function getOpenid(codeUrl){
            // axios.get(codeUrl).then(
            //     response => {
            //         console.log(response.data);
            //         // alert(response.data);
            //         alert('成功');
            //     },
            // error =>{
            //     console.log(error.massage);
            //     // alert(error.massage);
            //     alert('失败');
            //     alert(error);
            //     }
            // )
            axios({
                url: codeUrl,
                method:'get',
            }).then(
                response => {
                    console.log(response.data);
                    alert('成功');
                },
                error => {
                    console.log(error.massage);
                    alert('失败');
                    alert(error);
                }
            )
        }
        const qtoken = ref('');
        // const setUrl = 'http://localhost:8080/ldk/user';
        // const qtoken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJvMUNCRjZIRl9VbnVrUHI2bUZYd2cwWFBUZW44IiwiZXhwIjoxNjYxMDE5NDAwLCJpYXQiOjE2NjEwMTU4MDB9.03XSIwVWBTWCTk8BVEIhtolH63ls3cPYtHJbYsgqRv4'
        // function giveSet(setUrl){
        //     axios({
        //         url:setUrl,
        //         method:'post',
        //         data:{
        //             "isSubscribe": this.official?1:0, //是否打开公众号推送（1为是，0为否）
        //             "isMailSubscribe": this.email?1:0, //是否打开邮箱推送
        //             "email": this.mail|| null //电子邮箱
        //         },
        //         headers: {'token':qtoken}
        //     }).then(response => {
        //         console.log(response.data);
        //         alert(response.data.code);
        //     },
        //     error => {
        //         console.log(error.massage);
        //     }
        //     )
        // },

            function getSet(){
                let right = false;
                if(mail.value != ""){
                    let reg = /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/;
                    // alert(mail.value);
                    right = reg.test(mail.value);
                    // alert(right);
                }else{
                    alert('邮箱地址不可以为空哦!!!');
                }
                if(right == false){
                    email.value = false;
                    mail.value = '';
                    alert('输入的邮箱格式不对哦!!!');
                    return
                }
                const setUrl = 'https://298399317.xyz/ldk/api/user';
                const qqtoken = qtoken.value;
                axios({
                    url: setUrl,
                    method:'post',
                    data:{
                    "isSubscribe": official.value?"1":"0", //是否打开公众号推送（1为是，0为否）
                    "isMailSubscribe": email.value?"1":"0", //是否打开邮箱推送
                    "email": mail.value|| null //电子邮箱
                    },
                    headers:{'token':qqtoken}
                }).then(
                    response => {
                        console.log(response.data);
                        alert('提交成功');
                        // alert(response.data.code);
                    }
                    ,
                    error =>{
                        console.log(error.massage);
                        alert('提交失败');
                    }
                )
            }


            function getToken(){
            const n = window.location.href;
            const codeU = n.split('=');
            const code = codeU[codeU.length - 1];
            const tokenUrl = 'https://298399317.xyz/ldk/api/callback' + '?code=' + code;
            axios({
                url:  tokenUrl,
                method:'get'
            }).then(
                response =>{
                    console.log(response.data);
                    alert('成功');
                    // alert(response.data.data.token);
                    qtoken.value = response.data.data.token
                },
                            error =>{
                console.log(error.massage);
                alert('失败');
                }
            )
            }
        onMounted(()=>{
        console.log('这里是beforeMount');
        alert('(σ≧︎▽︎≦︎)σ。欢迎来到设置页面，在这里设置彩蛋的推送方式吧!!!!')
        if(window.location.href.indexOf('code') < 0){
        setTimeout(() => {
        window.location.href = 'https://298399317.xyz/ldk/api/wxLogin';
        }, 1000);
        }
        }),
        onUpdated(()=>{
            // alert('改变了');
            if(!qtoken.value){
            const n = window.location.href;
            const codeU = n.split('=');
            const code = codeU[codeU.length - 1];
            const tokenUrl = 'https://298399317.xyz/ldk/api/callback?code=' + code;
            axios({
                url:  tokenUrl,
                method:'get'
            }).then(
                response =>{
                    console.log(response.data);
                    // alert('获得token成功');
                    // alert(response.data.data.token);
                    qtoken.value = response.data.data.token
                },
                error =>{
                console.log(error.massage);
                // alert('获得token失败');
                }
            )
            }
        })
        
        return {
            official,
            email,
            dada,
            mail,
            codeUrl,
            getOpenid,
            codeture,
            getToken,
            qtoken,
            getSet
        }
    }
}
</script>

<style>
    @media screen and (max-width:700px){
        html{
            font-size:11px;
        }
    }
    .subscripation{
        position: relative;
        width: 21.875rem /* 350/16 */;
        height: 13.8125rem /* 221/16 */;
        /* border:1px solid gray; */
        padding:0 2.125rem /* 34/16 */;
        padding-top:5.25rem /* 84/16 */;
        margin: 0 auto;
        border-radius: 1.25rem /* 20/16 */;
        box-shadow: 0px 0.1875rem 0.375rem 0.0625rem rgba(0,0,0,0.16);
    }
    .official{
        float:left;
        width:100%;
        text-align:left;
        background-color: transparent;
        height:2.0625rem /* 33/16 */;
        font-size: 1.5625rem /* 25/16 */;
    }
    .email{
        float:left;
        width:100%;
        text-align:left;
        background-color: transparent;
        height: 2.0625rem /* 33/16 */;
        font-size: 1.5625rem/* 25/16 */;
        margin-top:2.8125rem /* 45/16 */;
    }
    input[type=checkbox]{
            -webkit-appearance: none;
    }
    #ququ +label{
    position: relative;
    display: block;
    float:right;
    width: 1.875rem /* 30/16 */;
    height:  1.875rem /* 30/16 */;
    cursor: pointer;
    background-color: transparent;
    border: 0.1875rem solid #706f72;
    border-radius: 0.1875rem /* 3/16 */;
    }

#ququ:checked + label::before{
    width: 3.75rem /* 60/16 */;
    height: 3.75rem /* 60/16 */;
    position: absolute;
    left: -0.9375rem /* 15/16 */;
    top: -1.25rem /* 20/16 */;
    display: block;
    content: '\2714';
    background: url(../assets/check.png);
    background-size: 100%;
    color:transparent;
    border-radius: 0.1875rem /* 3/16 */;
    }
    #mumu +label{
    position: relative;
    display: block;
    float:right;
    width: 1.875rem /* 30/16 */;
    height: 1.875rem /* 30/16 */;
    cursor: pointer;
    background-color: transparent;
    border: 0.1875rem /* 3/16 */ solid #706f72;
    border-radius: 0.1875rem /* 3/16 */;
    }

#mumu:checked + label::before{
    width: 3.75rem /* 60/16 */;
    height: 3.75rem /* 60/16 */;
    position: absolute;
    left:-0.9375rem /* 15/16 */;
    top: -1.25rem /* 20/16 */;
    display: block;
    content: '\2714';
    background: url(../assets/check.png);
    background-size: 100%;
    color:transparent;
    border-radius: 0.1875rem /* 3/16 */;
    }
    .mail{
        float:left;
        width: 100%;
        height: 3.8125rem /* 61/16 */;
        margin-top:1.1875rem /* 19/16 */;
        background-color: #f6f6f6;
        text-align: left;
        border-radius: 0.625rem /* 10/16 */;
        padding: 0.3125rem /* 5/16 */ 0px 0px  0.375rem /* 6/16 */;
    }
    .mail input{
        display: block;
        margin-top: 0.1875rem /* 3/16 */;
        height: 1.75rem /* 28/16 */;
        width:98%;
        outline: none;
        border:none;
        border-bottom: 1px solid #a3a3a3;
        background-color: #f6f6f6;
        font-size: 1.25rem /* 20/16 */;
        text-indent: 0.25rem /* 4/16 */;
    }
    #comfirm{
        width: 11.8125rem /* 189/16 */;
        height:4.375rem /* 70/16 */;
        outline:none;
        border:none;
        border-radius: 0.1875rem /* 3/16 */;
        background-color: white;
        text-align: center;
        line-height: 4.375rem /* 70/16 */;
        font-family: '微软雅黑';
        font-size: 1.25rem /* 20/16 */;
        box-shadow: 0px 0.1875rem 0.375rem 0.0625rem rgba(56,51,51,0.16);
        border-radius: 0.3125rem /* 5/16 */;
        margin-top: 1.4375rem /* 23/16 */;
        margin-bottom: 3.125rem /* 50/16 */;
    }
</style>