<template>
<div class="slide">
    <transition-group name='fade' tag='div'>
      <div v-for="i in [currentIndex]" :key='i'>
        <img :src="currentImg" />
      </div>
    </transition-group>
    <a class="prev" @click="prev" href='#'>&#10094;</a>
  <a class="next" @click="next" href='#'>&#10095;</a>
  </div>
</template>

<script>
export default {
  name: 'SliderShow',
  data() {
    return {
      images: [
        'https://s3.ap-south-1.amazonaws.com/assets.hplubricants/s3fs-public/HPL-Sectorial-Web-Banner-1920x715-pix[9].jpg',
        'http://www.sunshinetool.com/wp-content/uploads/2021/05/Oil-and-Gas.jpg',
        'https://www.gulfoilindia.com/wp-content/uploads/2017/03/bike-engine-oil-banner.png',
        'https://www.industrykart.com/media/catalog/category/Oils-_-Lubricants.jpg',
        'https://hpcladmin.hindustanpetroleum.com/img/UploadedFiles/HomeBanner/EnglishBanners/398851c16a5b460793322276cbad1b6f.jpg'
        ],
      timer: null,
      currentIndex: 0,
    }
  },

  
    mounted: function() {
      this.startSlide();
    },
  
    methods: {
      startSlide: function() {
        this.timer = setInterval(this.next, 4000);
      },
  
  
      next: function() {
        this.currentIndex += 1
      },
      prev: function() {
        this.currentIndex -= 1
      }
    },
  
    computed: {
      currentImg: function() {
        return this.images[Math.abs(this.currentIndex) % this.images.length];
      }
    }
  
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

img {
height:350px;
width:100%
  }

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;

}
.slide{
min-height: 400px;
min-width: 450px;}

.prev {
  left: 0;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}
</style>