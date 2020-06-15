<template>
  <div class="imageWrap">
    <button class="arrow left" @click="clickEvent" data-val="-1">왼</button>
    <ul class="imageList">
      <li :class="activeIndex === 1 ? ' active' : ''">
        <a href="#">
          <img
            src="https://media.vlpt.us/post-images/kameals/bc9cd740-05bb-11ea-93df-79d77f6fc891/1Vc0m5dS9SlhieEbR6n8wFg.jpeg"
            alt
          />
        </a>
      </li>
      <li :class="activeIndex === 2 ? ' active' : ''">
        <a href="#">
          <img src="https://tech.kakao.com/wp-content/uploads/2019/12/vue-474x474.png" alt />
        </a>
      </li>
      <li :class="activeIndex === 3 ? ' active' : ''">
        <a href="#">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdl5XfGtZVv03BVNeeA8JBHFsfgnprE3cTS-f8EPeSSooIKpzV&usqp=CAU"
            alt
          />
        </a>
      </li>
    </ul>
    <button class="arrow right" @click="clickEvent" data-val="1">오</button>
    <ul class="dotWrap">
      <li class="dot" :class="activeIndex === 1 ? ' active' : '' "></li>
      <li class="dot" :class="activeIndex === 2 ? ' active' : '' "></li>
      <li class="dot" :class="activeIndex === 3 ? ' active' : '' "></li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    clickEvent(e) {
      const val = e.target.dataset.val / 1;
      this.activeIndex += val;
      if (this.activeIndex > this.maxIndex) {
        this.activeIndex = 1;
      }
      if (this.activeIndex === 0) {
        this.activeIndex = 3;
      }
    },
  },
  data() {
    return {
      maxIndex: 3,
      activeIndex: 1,
    };
  },
};
</script>

<style>
.imageWrap {
  position: relative;
  width: 1200px;
  margin: 0 auto;
}

.imageWrap .arrow {
  z-index: 9;
  position: absolute;
  font-size: 32px;
}

.imageWrap .left {
  top: 50%;
}
.imageWrap .right {
  top: 50%;
  right: 0;
}

.imageWrap .imageList {
  display: flex;
  position: relative;
  overflow: hidden;
  height: 500px;
}

.imageList li {
  position: relative;
  right: -1000px;
  transition: 0s;
}

.imageList .active {
  right: 0;
  top: 0;
  transition: 1s;
}

.imageWrap img {
  width: 100%;
}

.dotWrap {
  width: 200px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 50%;
  bottom: 0;
  z-index: 33;
}

.dotWrap .dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: darkgray;
}

.dotWrap .dot.active {
  background-color: black;
}
</style>
