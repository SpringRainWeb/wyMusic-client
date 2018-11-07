<template>
  <div class="carousel">
    <el-carousel :interval="4000" height="160px">
      <el-carousel-item v-for="(val,index) in img" :key="index">
        <img :src="img[index]" alt="" width="100%" height="100%">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>

import img1 from '../../static/banner1.jpg'
import img2 from '../../static/banner2.jpg'
import img3 from '../../static/banner3.jpg'
import img4 from '../../static/banner4.jpg'


export default {
    name:'Carousel',
    data(){
        return {
            img:[img1,img2,img3,img4]
        }
    }
}
</script>


<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>