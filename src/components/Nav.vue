<template>
    <div class="main">
        <div class="tab">
            <div class="tab-item">
                <router-link to="/index">首页</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/article">技术文章</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/news">最新标讯</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/test">反爬练习</router-link>
            </div>
            <div class="tab-item long">
                <router-link to="/electricity">电商模拟化（含开源代码）</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/share">软件分享</router-link>
            </div>
        </div>
        <div class="search">
            <div class="input"><input type="text" placeholder=" 请输入关键字进行搜索"></div>
            <div class="img"><img src="../img/search.png"></div>
        </div>
    </div>
</template>
<script>
export default{
    name: 'Nav'
}
</script>
<style lang="less">
*{
    margin:0;
    padding:0;
}
.main{
    height:50px;
    position:relative;
    background-color:#058CE8;
    .tab{
        position:absolute;
        left:10%;
        width:60%;
        height:50px;
        display:flex;
        .tab-item{
            height:50px;
            width:15%;
            line-height:50px;
            flex-direction: row;
            text-align:center;
            &>a{
                display: block;
                font-size: 15px;
                color: white;
                text-decoration: none;
                &:active{
                    color: rgb(240, 20, 20);
                }
                &:hover{
                    background-color:#009688;
                }
            }
        }
        .long{
            width:25%;
        }
    }
    .search{
        position:absolute;
        left:70%;
        width:20%;
        height:50px;
        display:flex;
        margin:7px 0;
        .input{
            height:36px;
            width:60%;
            padding:0 5%;
            input{
                height:32px;
                width:100%;
            }
        }
        .img{
            height:36px;
            width:30%;
            img{
                cursor:pointer;
            }
        }
    }
}
</style>