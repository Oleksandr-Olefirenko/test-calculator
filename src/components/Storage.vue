<template>
  <div class="wrapper">
    <h2>Storage</h2>
    <div class="f-table">
        <div class="f-header">
          <div class="f-table-header">The first Fraction</div>
          <div class="f-table-header">Operation</div>
          <div class="f-table-header">Second Fraction</div>
          <div class="f-table-header">Result</div>
        </div>
        <router-link v-for="(fraction, index) in fractions" tag="div" :to="{name: 'FractionDetails', params: { id: fraction.id }}" :id="fraction.id" class="f-content" :key="index">
          <div class="f-table-content">{{fraction.fractionLeft.numerator}}<span class="splitter"></span>{{fraction.fractionLeft.denominator}}</div>
          <div class="f-table-content"><span>{{fraction.operation}}</span></div>
          <div class="f-table-content">{{fraction.fractionRight.numerator}}<span class="splitter"></span>{{fraction.fractionRight.denominator}}</div>
          <div class="f-table-content">{{fraction.fractionResult.numerator}}<span class="splitter"></span>{{fraction.fractionResult.denominator}}</div>
        </router-link>
    </div>
    <button class="btn" @click="clearStore">Clear Store</button>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'Storage',
    data() {
      return {}
    },
    computed: {
        ...mapGetters({
          fractions: 'getFractions'
      })
    },
    methods: {
      clearStore() {
        this.$store.dispatch('clearStore')
      }
    }
  }
</script>

<style scoped>
  .wrapper{
    margin-left: 10px;
  }
  .splitter {
    height: 0;
    border: 1px solid black;
    margin: 5px;
    padding: 0 6px;
    width: 100%;
  }

  .f-table {
    display: flex;
    flex-direction: column;
    background: #3F51B5;
    color: white;
    font-family: 'Roboto', sans-serif;
    padding: 20px;
    border: 1px solid white;
  }

  .f-header {
    display: flex;
  }

  .f-table-header {
    flex: 1 1 100px;
    text-align: center;
    margin-bottom: 1%;
  }

  .f-content {
    display: flex;
    border-top: 1px solid white;
  }

  .f-content:hover{
    background-color: #3D5AFE;
    transition: all .3s;
    cursor: pointer;
  }

  .f-table-content {
    display: flex;
    flex-direction: column;
    flex: 1 1 100px;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-bottom: 1px solid white;
    padding: 15px;
  }
  .f-table-content:first-child{
    border-left: 1px solid white;
  }
  .f-table-content:last-child{
    border-right: 1px solid white;
  }

  h2 {
    text-align: center;
    font-family: 'Skranji', cursive;
  }

  .btn {
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    background: #1A237E;
    cursor: pointer;
    width: 100%;
    border: none;
    margin: 3px;
    padding: 10px;
    border-radius: 15px;
  }
  .btn:hover{
    background: #304FFE;
  }

</style>
