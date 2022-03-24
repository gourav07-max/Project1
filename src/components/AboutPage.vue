<template>
<div>
 <div class="about-section">
  <h1>About Us</h1>
  <p>We are teh traders of Fuel Resources over Internet</p>
  <p>We Allow both Sellers and Buyers to involve with us</p>
</div>

<h2 style="text-align:center">Our Team</h2>
<div class="cardsBox">
  <div class="column">
    <div class="card">
      <img src="./images/person.jpg" alt="Jane" style="width:100%">
      <div class="container">
        <h2>Jane Doe</h2>
        <p class="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
       
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="./images/person.jpg" alt="Mike" style="width:100%">
      <div class="container">
        <h2>Mike Ross</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
       
      </div>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <img src="./images/person.jpg" alt="John" style="width:100%">
      <div class="container">
        <h2>John Doe</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'AboutPage',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.about-section {
  padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: white;
}
</style>