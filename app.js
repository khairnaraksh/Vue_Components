Vue.component('greeting',{
  template:'<p>hey  ,i am{{name}} .<button v-on:click="changeName">changename</button></p>',

  data:function(){
    return{
      name:'Aksh'
    }
  },
  methods:{
    changeName: function(){
      this.name ='Akshay'
    }
  }
})

 new Vue({
  el: '#vue-app-one',

});
 new Vue({
  el: '#vue-app-two',

});
