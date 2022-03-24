<template>
  <div class="cardsBox">
     <div  class="card" > <router-link :to="{ name: 'HomePage' }" ><div>
  <img src="./images/two.jpg" alt="TWO WHEELER" style="width:300px;height:300px;">
  <div class="container">
    <h4><b>TWO-WHEELER</b></h4>
   
  </div>
</div></router-link > </div>
<div  class="card" >
<router-link :to="{ name: 'HomePage' }" ><div >
  <img src="./images/four.jpg" alt="FOUR WHEELER" style="width:300px;height:300px;">
  <div class="container">
    <h4><b>FOUR-WHEELER</b></h4>
  
  </div>
</div></router-link ></div>
<div class="card">
<router-link :to="{ name: 'HomePage' }" ><div >
  <img src="./images/others.jpg" alt="OTHERS" style="width:300px;height:300px;">
  <div class="container">
    <h4><b>OTHERS</b></h4>

  </div>
</div></router-link ></div>



  </div>
</template>

<script>
export default {
  name: 'lubricantPage',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
