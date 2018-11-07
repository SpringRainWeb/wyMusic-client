<template>
  <div class="Rank">
    <search style="position:fixed;z-index:102;background:#fefefe;"/>
    <router-view style="z-index:1;position:relative;top:60px;"></router-view>
  </div>
</template>

<script>
import Search from '../../components/Search.vue'
export default {
  name: 'Rank',
  data () {
    return {

    }
  },
  components:{
    Search,
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
