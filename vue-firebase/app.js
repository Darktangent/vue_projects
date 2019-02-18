

new Vue({
  el:"#app",
  data:{
    title:"Becoming a Vue Ninja",
    name:"Rye",
    url:"http://www.youtube.com",
    classes:['one','two'],
    wage:10,
    showAge:false,
    coords:{
      x:0,
      y:0
    },
    showName:true,
    items:["mushroom","Green shells", "Star"],
    ninjas:[
      {name:'Crystal', age:25, belt:'black'},
      {name:'Rye', age:29, belt:'brown'},
      {name:'Ken', age:40, belt:'Orange'}
    ]
  },
  methods:{
    greet(time){

      return `Hello and good ${time}, ${this.name}`
    }
    ,
    changeWage(amount){
      this.wage+=amount;
    },
    logEvent(e){
      console.log(e.target.value)
    },
    logCoords(e){
      this.coords.x=e.offsetX
      this.coords.y=e.offsetY
    },
    updateName(e){
      this.name=e.target.value
    },
    logMessage(){
      console.log("Hello there")
    },
    toggleName(){
      this.showName=!this.showName
    },
    toggleAge(){
      this.showAge=!this.showAge
    }
  }


})