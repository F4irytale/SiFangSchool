<template>
	<view>
		<view class="content">
			<image class="logo" src="../../static/icon.png"></image>
			<view class="text-area">
				<text class="version">{{title}}</text>
			</view>
		</view>
		
		<view class="items">
			<text class="navbar" v-for="item of items" :key="item.id" v-on:click="content(item.id)">
				{{item.title}}
			</text>
		</view>
		<view class="discribe">
			
			<text>{{discribe}}</text>
		</view>
		
		<view class="map-text">
		<map :latitude="latitude" :longitude="longitude" :scale="scale" class="map" >
		</map>
		<text class="options">{{options}}</text>
		</view>
		
		<view class="pmt">
			<image src="../../static/pmt.jpg" class="pmt-img"></image>
			<text>四方学院南校区平面图</text>
		</view>
		<!-- <ad unit-id="3589e9e5cb570754ca94fa0c3f14517e"></ad> -->
		<view class="text-content">
			<view class="info">
				<icon type="info" size="20"></icon>
				<text>南校区专业</text>
			</view>
			<view class="major">
				<block v-for="major of nmajors" :key="major" >
					{{major}}
				</block>
			</view>
			<view class="info">
				<icon type="info" size="20"></icon>
				<text>西校区专业</text>
			</view>
			<view class="major">
				<block v-for="major of smajors" :key="major" >
					{{major}}
				</block>
			</view>
		</view>


		<view class="luxiancontent">
			<view class="train">
				<icon type="success" size="20"></icon>
				<text>推荐乘车路线:</text>
			</view>
			<view v-for="train of trains" :key="train" class="luxian">{{train}}</view>
		</view>
		
		<button class="share-btn" open-type="share">感谢点此分享</button>
		
		<view class="footer">
			©2020 401 STUDIO 版权所有
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'ver 2020.8 Fairytale',
				items:[{
					id:1,
					title:'查看图片',
				},{
					id:2,
					title:'最新公告',
				},{
					id:3,
					title:'成绩查询(开发中)',
				},{
					id:4,
					title:'招生就业(开发中)',
				},{
					id:5,
					title:'生活相关',
				},{
					id:6,
					title:'问题反馈',
				}],
				latitude: 37.8845450000,
				longitude: 114.4064150000,
				scale: 15,
				options:'如果无法显示地图请升级QQ至最新版本,下划继续浏览',
				discribe:'石家庄铁道大学四方学院创建于2001年，是经河北省人民政府批准、国家教育部确认的，实施本科学历教育的独立学院。',
				nmajors:['英语专业(文史)，','法学专业(文史)，','金融学专业(理工)，','自动化专业(理工)，','会计学专业(理、文)，','土木工程专业(理工)，','测绘工程专业(理工 )，','财务管理专业(理、文)，','市场营销专业(理、文)，','工程管理专业(理、文)，','电子信息工程专业(理工)，','国际经济与贸易专业(文史)，','计算机科学与技术专业(理工)，','电气工程及其自动化专业(理工)，','信息管理与信息系统专业(理工)，','建筑环境与能源应用工程(理工)'],
				smajors:['交通工程专业(理工)，','无机非金属材料工程(理工)，','艺术设计(展示设计方向)(艺术类)，','艺术设计(动画设计方向)(艺术类)，','机械设计制造及其自动化(理工)'],
				trains:['石家庄北站->75路公交车(南郊客运站)->南佐(四方学院方向)(小红车)','石家庄站->西广场南行，二环附近即可等待南佐(四方学院方向)(小红车)']
			}
		},
		onLoad() {

		},
		methods: {
			content(num){
				if(num==1){
					uni.navigateTo({
						url:'/pagesA/content/content'
					})
				}
				if(num==6){
					uni.navigateTo({
						url:'/pages/comment/comment'
					})
				}
				if(num==2){
					uni.navigateTo({
						url:'/pages/notice/notice'
					})
				}
				if(num==5){
					uni.navigateTo({
						url:'/pagesB/life/life'
					})
				}
			},
			onShareAppMessage(res) {
			      return {
			        title: '四方学院同人站',
			        path: '/pages/index/index',
					imageUrl:"https://s1.ax1x.com/2020/05/13/YakdaR.png"
			      }
			    }
		}
	}
</script>

<style>
	.content{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.logo{
		width: 650rpx;
		height: 130rpx;
	}
	.version{
		font-size: 18rpx;
		color:#ff1744 ;
	}
	.navbar{
		width: 330rpx;
		line-height: 80rpx;
		background-color: rgb(0,143,255);
		text-align: center;
		border-radius: 10rpx;
		margin: 10rpx 20rpx;
		color: #fff;
	}
	.items{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}
	.map{
		width: 680rpx;
		height: 500rpx;
		margin: 0 auto;
	}
	.options{
		font-size: 20rpx;
		color: #d50000;
		margin-top: 10rpx;

	}
	.map-text{
		display: flex;
		flex-direction: column;
		justify-content:center;
		align-items: center;
		margin-top: 20rpx;
	}
	.discribe{
		background-color: #64b5f6;
		line-height: 50rpx;
		margin: 10rpx 30rpx;
		border-radius: 8rpx;
		padding: 15rpx;
		box-sizing: border-box;
	}
	
	.discribe text{
		color: #FFFFFF;
		font-size: 30rpx;
	}
	.text-content{
		width: 680rpx;
		/* height: 700rpx; */
		background-color: #e1f5fe;
		margin: 0 auto;
		margin-top: 20rpx;
		border-radius: 8rpx;
		padding-bottom: 20rpx;
	}
	.info{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 20rpx 0 10rpx 0;
		font-size: 40rpx;
	}
	.info text{
		margin-left: 20rpx;
	}
	.major{
		font-size: 30rpx;
		margin-top: 5rpx;
		width: 600rpx;
		margin: 0 auto;
		color: #212121;
		
	}
	.train{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.train text{
		margin-left: 20rpx;
	}
	.luxian{
		font-size: 35rpx;
		color: #e91e63;
		padding: 0 50rpx;
		margin-bottom: 30rpx;
	}
	.luxiancontent{
		margin-top: 10rpx;
	}
	.footer{
		width: 500rpx;
		margin: 0 auto;
		font-size: 30rpx;
		color: #d50000;
		text-align: center;
		margin-top: 50rpx;
		margin-bottom: 10rpx;
	}
	.share-btn{
		background-color: rgb(0,143,255);
		line-height: 100rpx;
		color: #fff;
		margin-right: 50rpx;
		margin-left: 50rpx;
		margin-top: 30rpx;
		margin-bottom: 50rpx;
	}
	.pmt-img{
		height: 350rpx;
		width: 700rpx;
	}
	.pmt{
		text-align: center;
		margin-top: 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.pmt text{
		font-size: 20rpx;
		color: #007AFF;
	}

</style>
