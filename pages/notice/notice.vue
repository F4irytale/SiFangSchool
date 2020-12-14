<template>
	<view>
		<block v-for="item of news" :key="item.number">
			<view class="container">
				<view class="title">{{item.title}}</view>
				<text class="content">{{item.content}}</text>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				'news':[]
			}
		},
		methods: {
			
		},
		onLoad() {
			uniCloud.callFunction({
			    name: 'notice'
			  })
			  .then(res => {
				  this.news = res.result.data
				 console.log(res.result.data)
			  });
		}
	}
</script>

<style>
.container{
	width: 700rpx;
	padding: 10rpx;
	background-color: #f5f5f5;
	margin: 0 auto;
	margin-top: 40rpx;
	border-radius: 8rpx;
}
.title{
	width: 700rpx;
	margin: 0 auto;
	text-align: center;
	font-size: 40rpx;
	color: #212121;
}
.content{
	width: 700rpx;
	word-wrap: break-word;
	font-size: 35rpx;
	color: #212121;
}
</style>
