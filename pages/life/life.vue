<template>
	<view>
		<view class="one-word">
			<text>一句毒鸡汤：</text>
			<block v-for="item of message" :key="item.content">
				{{item.content}}
			</block>
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
</style>
