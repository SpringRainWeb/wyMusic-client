import Vue from 'vue'

Vue.filter('listenNum',function(val){
    let num = (val/10000).toString();
    let reg = /.\d*$/g;
    return num.replace(reg,"");
})
Vue.filter('int',function(val){
    return parseInt(val);
})
Vue.filter('listenNum2',function(val){
    let num = (val/100000).toString();
    let reg = /.\d*$/g;
    return num.replace(reg,"");
})

Vue.filter("date",function(val){
			
    var date = new Date(val);
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate()
    return year+"年"+month+"月"+day+"日";
})
Vue.filter('mp3',function(val){
    return `http://music.163.com/song/media/outer/url?id=${val}.mp3`
})