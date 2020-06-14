<template>
  <main class="pickerBody">
    <div class="colorWrap">
      <div class="preview"></div>
      <div class="selectWrap" @click="seletor"></div>
    </div>
    <div class="colorHex">
      <input class="input" type="text" />
    </div>
    <div class="slider">
      <div class="sliderBar"></div>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    seletor(e) {
      console.log(e);
    },
  },
};
</script>

<style>
.pickerBody {
  width: 500px;
  height: 400px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -250px;
  margin-top: -200px;
  border: solid 1px #d1d2d6;
  text-align: center;
}
.pickerBody .colorWrap {
  height: 270px;
}

.pickerBody .preview {
  float: left;
  background-color: aqua;
  width: 20%;
  height: 100%;
}

.pickerBody .selectWrap {
  float: right;
  background-color: rgb(27, 29, 29);
  height: 100%;
  width: 80%;
}

.pickerBody .colorHex {
  margin-top: 20px;
}

.pickerBody .colorHex .input {
  height: 50px;
  width: 100%;
  text-align: center;
  border: solid 1px #d1d2d6;
}

.pickerBody .slider {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  height: 50px;
  line-height: 50px;
  width: 100%;
}

.pickerBody .slider .sliderBar {
  width: 80%;
  height: 20px;
  border-radius: 50px;
  background: linear-gradient(
    to right,
    hsl(0, 100%, 50%),
    hsl(60, 100%, 50%),
    hsl(120, 100%, 50%),
    hsl(180, 100%, 50%),
    hsl(240, 100%, 50%),
    hsl(300, 100%, 50%),
    hsl(360, 100%, 50%)
  );
}
</style>
