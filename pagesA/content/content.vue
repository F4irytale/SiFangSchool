<template>
	<view>
	<swiper indicator-dots="true" autoplay="true">
		<swiper-item>
			<image src="../static/main.jpg" class="scrollimg"></image>
		</swiper-item>
		<swiper-item>
			<image src="../static/jiao8.jpg" class="scrollimg"></image>
		</swiper-item>
		<swiper-item>
			<image src="../static/caochang.jpg" class="scrollimg"></image>
		</swiper-item>
	</swiper>
		<view class="showimg-flex">
			<view class="showimg-flex-contaner">
				<image src="../static/dacaochang.jpg" class="showimg"></image>
				<image src="../static/77dong.jpg" class="showimg"></image>
			</view>
			<view class="showimg-flex-contaner">
				<image src="../static/wancaochang.jpg" class="showimg"></image>
				<image src="../static/zhujiaoqian.jpg" class="showimg"></image>
			</view>
			<view class="showimg-flex-contaner">
				<image src="../static/shangxuelu.jpg" class="showimg"></image>
				<image src="../static/yingxinsheng.jpg" class="showimg"></image>
			</view>
		</view>
		<view class="footer">
			©2020 401 STUDIO 版权所有
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.scrollimg{
	height: 400rpx;
	width: 700rpx;
	padding: 20rpx;
}
swiper{
	height: 440rpx;
	text-align: center;
}
.wx-swiper-dots {
  position: relative;
  left: unset !important;
  right: 0;
}

.wx-swiper-dots.wx-swiper-dots-horizontal {
  margin-bottom: 20rpx;
}
.showimg{
	width: 340rpx;
	height: 240rpx;
}
.showimg-flex{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	/* align-items: center; */
}
.showimg-flex-contaner{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 15rpx 25rpx;
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
</style>
