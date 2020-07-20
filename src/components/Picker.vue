<template>
  <section class="picker_wrap">
    <div class="color_wrap">
      <div class="preview"></div>
      <div class="select_wrap" @click="seletor"></div>
    </div>
    <div class="color_hex">
      <input class="input" type="text" />
    </div>
    <div class="slider">
      <div class="slider_bar"></div>
    </div>
  </section>
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
.picker_wrap {
  margin: 200px auto 0;
  width: 1000px;
  border: solid 1px #d1d2d6;
  text-align: center;
}
.picker_wrap .color_wrap {
  height: 270px;
}

.picker_wrap .preview {
  float: left;
  background-color: aqua;
  width: 20%;
  height: 100%;
}

.picker_wrap .select_wrap {
  float: right;
  background-color: rgb(27, 29, 29);
  height: 100%;
  width: 80%;
}

.picker_wrap .color_hex {
  margin-top: 20px;
}

.picker_wrap .color_hex .input {
  height: 50px;
  width: 80%;
  text-align: center;
  border: solid 1px #d1d2d6;
}

.picker_wrap .slider {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
}

.picker_wrap .slider .slider_bar {
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
