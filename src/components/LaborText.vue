<template>
    <div class="bigbox">       
        <div class="box">
            <h3>{{larborObject.title}}</h3>
            <span class="subitem">学年学期:</span>
            <span class="content">{{larborObject.data}}</span><br>
            <span class="subitem">授课老师:</span>
            <span class="content">{{larborObject.teacher}}</span><br>
            <span class="subitem">学分/学时</span>
            <span class="content">{{larborObject.time}}</span><br>
            <span class="subitem">活动报名人数:</span>
            <span class="content">{{larborObject.people + '人'}} </span><br>
            <span class="subitem">限定人数:</span>
            <span class="content">{{larborObject.maxpeople + '人'}}</span><br>
            <span class="subitem">活动地点:</span>
            <span class="content">{{larborObject.place}}</span><br>
            <span class="subitem">活动报名时间:</span>
            <span class="content">{{larborObject.timeStart}}</span><br>
            <span class="subitem">活动起止时间:</span>
            <span class="content">{{larborObject.activeStart}}</span><br>
            <span class="subitem">备注:</span>
            <span class="content">{{larborObject.remarkThing}}</span><br>
        </div>
        <div class="hrr"></div>
        <div class="egg">
            <div class="logo">
                <img src="../assets/logo.beea52f.png" alt="">
            </div>
            <span>公众号彩蛋</span>
        </div>
    </div>
    <div>
    {{getDate(larborUrl)}}
    </div>
</template>

<script>
    import {reactive} from 'vue'
    import axios from 'axios'
export default {
    setup(){
        let larborObject = reactive({
            title:'校园公共环境清洁',
            data:'2021-2022-2',
            teacher:'蔡虹',
            time:'0.25/3',
            people:0,
            maxpeople: 50,
            place:'韶师3号楼401',
            timeStart:'2022-03-15 22:00 ~ 2022-03-16 12:00',
            activeStart:'2022-03-16 14:20 ~ 2022-03-16 17:20',
            remarkThing:'若有错误，请向公众号反馈'
        })
        const larborUrl = 'https://298399317.xyz/ldk/api/class';
        function getDate(url){
            axios.get(url).then(
                response => {
						console.log('请求成功了',response.data.data)
                        const newNumber = response.data.data.length;
                        const larborData = response.data.data[newNumber - 1];
                        console.log(newNumber)
                        larborObject.title = larborData.name;
                        larborObject.data = larborData.term;
                        larborObject.teacher =larborData.teacher;
                        larborObject.time  = larborData.score;
                        larborObject.place = larborData.place;
                        larborObject.maxpeople = larborData.personNumber;
                        larborObject.timeStart = larborData.startTime + larborData.endTime;
                        larborObject.activeStart  = larborData.joinTime + larborData.joinEndTime;
					},
					error => {
						console.log('请求失败了',error.message)
					}
            )
        }
        return {
                larborObject,
                larborUrl,
                getDate
            }
    }
}
</script>

<style>
    *{
        margin:0;
        padding:0;
    }
    @media  screen and (max-width:700px) {
        html{
            font-size: 11px;
        }
    }
    .hrr{
        widows: 100%;
        height: 1px;
        background-color: #cccccc;
    }
    .bigbox{
        min-width: 27.5rem /* 440/16 */;
        width: 80%;
        max-width:29.5rem /* 440/16 */;
        min-height:18.625rem /* 298/16 */;
        background-color: white;
        border-radius: 1rem;
        margin:0 auto;
        overflow: hidden;
        border:1px solid rgb(222, 222, 222)
    }
    .box {
        min-width:27.5rem /* 440/16 */;
        max-width: 27.5rem /* 440/16 */;
        max-height:19.875rem /* 318/16 */;
        background-color: white;
        border-radius: 1rem;
        margin:0 auto;
        text-align: left;
        padding: .75rem /* 12/16 */ 1.25rem /* 20/16 */;
    }
    .box h3{
        display: block;
        margin-bottom:.8125rem /* 13/16 */
    }
    .subitem{
        color:#777777
    }
    .content{
        display: inline-block;
        margin-left:8px;
        margin-top:.1875rem /* 3/16 */;
        margin-bottom:.1875rem /* 3/16 */;
    }
    .egg{
        height: 2.3125rem /* 37/16 */;
        width: 100%;
        background-color: white;
        overflow: hidden;
        line-height: 2.25rem /* 36/16 */
    }
    .logo{
        float: left;
        width:1.375rem /* 22/16 */;
        height:1.375rem ;
        background-color: transparent;
        margin-top:.3125rem /* 5/16 */;
        margin-left:1.3125rem /* 21/16 */;
    }
    .logo img{
        width:100%;
        height:100%;
    }
    .egg span{
        float:left;
        margin-left:.5625rem /* 9/16 */;
    }
</style>