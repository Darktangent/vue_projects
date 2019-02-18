<template>
  <div id="app">
   <h1>{{title}}</h1>
   <Navbar></Navbar>
   <AllFriends :friends="friends" @delete="deleteFriend" ></AllFriends>
   <OnlineFriends :friends="friends"></OnlineFriends>
   <Blogs></Blogs>
  </div>
</template>

<script>
import Navbar from './Navbar'
import AllFriends from './AllFriends'
import OnlineFriends from './OnlineFriends'
import Blogs from './Blogs'
export default {
  name: 'app',
  methods:{
    deleteFriend(payload){
      this.friends=this.friends.filter(friend=>{
        return friend.name!==payload.name
        })
    }
  },
  data () {
    return {
     title:'My First Vue app!:}',
      friends:[
        {name:"Mario",online:true},
        {name:"Luigi",online:false},
        {name:"Toad",online:true},
        {name:"Bowser",online:false}

      ]
    }
  },
  components:{
    Navbar:Navbar,
    AllFriends:AllFriends,
    OnlineFriends:OnlineFriends,
    Blogs
  }
}
</script>

<style scoped>
h1{
  font-weight: normal;
  text-align: center;
  color:#444;
  font-size: 1.5rem;
}
</style>
