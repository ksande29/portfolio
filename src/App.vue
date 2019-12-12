<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    'app-header': Header
  }
}
</script>

<style>
* {
  font-family: 'Hind', sans-serif;
}

.notFullWidth {
    max-width: 1366px;
}
.centered-container {
    margin-left: auto; margin-right: auto;
}

/* zoom*/
.img-hover-zoom {
  overflow: hidden;
}
/* Transition property for smooth transformation of images */
.img-hover-zoom img {
  transition: transform .5s ease;
}
/* Finally, transforming the image when container gets hovered */
.img-hover-zoom:hover img {
  transform: scale(1.1);
}

.hero {
    background-image: url("components/orange.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

</style>
