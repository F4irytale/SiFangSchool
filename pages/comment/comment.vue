<template>
	<view>
		<textarea class="return" @input="input" placeholder="如果您想了解更多,请告诉我们"></textarea>
		<button class="add" @click="comment" >确定反馈</button>
		<!-- <ad unit-id="6d583f8a8a5487c61484868820c1edf9" type="card"></ad> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info:''
			}
		},
		methods: {
			input(e){
				 this.info = e.detail.value;
				 console.log(this.info.length)
			},
			comment(){
				if(this.info.trim().length<=5){
					uni.showToast({
						title:"请填多于5个字",
						icon:"none"
					})
				}else{
					uniCloud.callFunction({
					    name: 'comment',
					    data: { 
							"info":this.info
						}
					  })
					  .then(res => {
						  uni.showToast({
						  	title:"感谢反馈",
							icon:"success"
						  })
					  });
				}				
			}
		}
	}
</script>

<style>
.return{
	background-color: #e0e0e0;
	padding: 10rpx;
	margin: 0 auto;
	margin-top: 50rpx;
	border-radius: 5rpx;
	width: 700rpx;
	height: 400rpx;
	font-size: 40rpx;
}
.add{
	background-color: #4fc3f7;
	width: 700rpx;
	margin-top: 50rpx;
	color: #fff;
	line-height: 100rpx;
	font-size: 40rpx;
	margin-bottom: 50rpx;
}
.ad{
	
}
</style>
