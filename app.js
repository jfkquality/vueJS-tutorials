new Vue({
  el: '#vue-app',
  data: {
    name: 'John',
    job: 'Ninja',
    website: 'http://www.thenetninja.co.uk',
    websiteTag: '<a href="http://www.thenetninja.co.uk" target="_blank">The Net Ninja Website</a>',
    age: 25,
    x: 0,
    y: 0
  },
  methods: {
    greet: function(time){
      // Access the data
      // Nomrally think: this.data.name
      // But vueJS proxies all data to top of Vue instance
      return 'Good ' + time + ', ' + this.name;
    },
    add: function(inc){
      this.age += inc;
    },
    subtract: function(dec){
      this.age -= dec;
    },
    updateXY: function(event){
      console.log(event);
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function(){
      alert("You clicked me");
    },
    logName: function(){
      console.log("You entered your name");
    },
    logAge: function(){
      console.log("You entered your age");
    }
  }
});
