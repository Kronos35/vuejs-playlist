new Vue({
	el:'#vue-app',
	data: {
		name: 'Alvaro',
		job: 'Karateka',
		website: 'https://www.facebook.com/alvaro.forever.23',
		websiteTag:'<a href="https://www.facebook.com/alvaro.forever.23">WebSite 2</a>'
	},
	methods:{
		greet: function(){
			var d = new Date();
			var n = d.getHours();
			greet='Good ';
			
			if (n>18||n<6) {
				greet+='night '+this.name;
			}else if (n>12) {
				greet+='afternoon '+this.name;
			}else if (n>6) {
				greet+='morning '+this.name;
			}
			return greet
		}
	}
});
new Vue({
	el:'#events-vue-app',
	data: {
		age:25,
		x:0,
		y:0

	},
	methods:{
		add:function(amount){
			this.age+=amount;
		},
		subtract:function(amount){
			this.age-=amount;
		},
		updateXY:function(event){
			this.x=event.offsetX;
			this.y=event.offsetY;
		}
	}
});