new Vue({
	el:'#vue-app',
	data: {
		name: 'Alvaro',
		job: 'Karateka'
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