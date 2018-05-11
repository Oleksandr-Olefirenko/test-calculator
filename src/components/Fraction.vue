<template>
  <div class="">
    <div class="fraction">
      <input v-model="value.numerator" type="text" :style="{'width': value.numerator.length * 10 + 'px'}" >
      <span class="splitter"></span>
      <input v-model="value.denominator" type="text" :style="{'width': value.denominator.length * 10 + 'px'}" >
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Fraction',
    props: {
      value: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
      }
    },
    computed: {},
    mounted() {},
    methods: {
      sendNumerator() {
        this.$emit('numerator', this.numerator)
      },
      sendDenominator() {
        this.$emit('denominator', this.denominator)
      }
    }
  }
</script>

<style scoped>
  .fraction {
    display: flex;
    flex-direction: column;
    margin: 5px;
    align-items: center;
    position: relative;
  }

  .splitter {
    height: 0;
    border: 1px solid black;
    width: 100%;
  }



  .fraction input {
    font-family: 'Roboto', sans-serif;
    margin: 3px;
    flex: 0 0 20px;
    width: 30px;
    min-width: 30px;
    text-align: center;
    font-size: 16px;
  }

</style>