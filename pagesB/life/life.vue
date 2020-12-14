<template>
	<view>
		<view class="one-word">
			<text >一句毒鸡汤：</text>
			<block v-for="item of message" :key="item.content">
				{{item.content}}
			</block>
		</view>
		
		<view class="content-sus">
			<text>宿舍一览</text>
			<swiper indicator-dots="true" autoplay="true" class="photos">
				<swiper-item>
					<image src="../photos/78nei.jpg" class="imgwidth"></image>
					<text class="dis">78栋宿舍</text>
				</swiper-item>
				<swiper-item>
					<image src="../photos/sunei.jpg" class="imgwidth"></image>
					<text  class="dis">普通宿舍</text>
				</swiper-item>
				
			</swiper>
		</view>
		
		<view class="content-st"> 
			<text>食堂一览 (学校共四个食堂)</text>
			<image src="../photos/stnei.jpg" class="imgwidth">
			<image src="../photos/st1.jpg" class="imgwidth">
			<image src="../photos/st2.jpg" class="imgwidth">
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				message:''
			}
		},
		methods: {
			
		},
		onLoad() {
			uni.request({
			    url: 'https://api.tianapi.com/txapi/dujitang/index?key=', //仅为示例，并非真实接口地址。
			    success: (res) => {
			        console.log(res.data);
			        this.message = res.data.newslist
			    }
			});
		}
	}
</script>

<style>
.one-word{
	font-size: 30rpx;
	margin: 10rpx 10rpx;
	padding: 10rpx;
	color: #287d7d;
	background-color: #f2f2f2;
	border-radius: 8rpx;
}
.content-sus{
	width: 700rpx;
	margin: 0 auto;
}
.content-sus>text{
	color: red;
	line-height: 80rpx;
}
.photos{
	width: 700rpx;
	height: 450rpx;
	border-radius: 8rpx;
}
.imgwidth{
	width: 700rpx;
	height: 380rpx;
}
.dis{
	color: #555555;
	font-size: 30rpx;
}
.content-st{
	width: 700rpx;
	margin: 0 auto;
}
.content-st>text{
	color: red;
	line-height: 80rpx;
}
.content-st image{
	padding-bottom: 20rpx;
}
</style>
