<template>

<div>
<SliderShow/>
 <div class="cardsBox">
  <div class="card"> <router-link :to="{ name: 'lubricantPage' }" ><div >
  <img src="./images/lubricant.jpg" alt="LUBRICANT" style="width:300px;height:300px;">
  <div class="container">
    <h4><b>Lubricant</b></h4>
  </div> 

</div></router-link ></div>
<div class="card">
<router-link :to="{ name: 'fuelPage'}" ><div  >
  <img src="./images/fuel.jpg" alt="FUEL" style="width:300px;height:300px;">
  <div class="container">
    <h4><b>FUEL</b></h4>
   
  </div>
</div></router-link ></div>
<br>
  </div>
</div>


 


  
  
</template>

<script>
import SliderShow from './SliderShow.vue'

export default {
  name: 'HomePage',
  components: {
    SliderShow,
  
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.cardsBox{
  display:flex;
  flex-direction:row;
  justify-content: space-around;
  
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
  width:40%;
  margin-left:20px;
 
}

/* Add rounded corners to the top left and the top right corner of the image */
img {
  border-radius: 5px 5px 0 0;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
</style>