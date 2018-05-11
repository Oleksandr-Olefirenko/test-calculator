<template>
  <div>
    <h2>Equation</h2>
    <div class="wrapper">
      <div class="fraction">
        <div>{{fraction.fractionLeft.numerator}}</div>
        <span class="splitter"></span>
        <div>{{fraction.fractionLeft.denominator}}</div>
      </div>
      <span class="operator">{{fraction.operation}}</span>
      <div class="fraction">
        <div>{{fraction.fractionRight.numerator}}</div>
        <span class="splitter"></span>
        <div>{{fraction.fractionRight.denominator}}</div>
      </div>
      <span class="operator">=</span>
      <div class="fraction">
        <div>{{fraction.fractionResult.numerator}}</div>
        <span class="splitter"></span>
        <div>{{fraction.fractionResult.denominator}}</div>
      </div>
    </div>
    <button class="btn" @click="$router.push('/')">Back</button>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'FractionDetails',
    props: ['id'],
    data() {
      return {
      }
    },
    computed: {
      fraction () {
        return this.$store.getters.getFractionById(this.id)
          ? this.$store.getters.getFractionById(this.id)
          : {}
      }
    },
    mounted() {
      this.checkPath()
    },
    beforeRouteUpdate(to, from, next) {
      this.checkPath()
      next()
    },
    methods: {
      checkPath () {
        const fraction = this.$store.getters.getFractionById(this.id)
        if (fraction === undefined ){
          this.$router.replace({ name: "Main"})
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrapper {
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 40px;
    background: #3F51B5;
    border: 1px solid white;
  }

  .fraction {
    display: flex;
    flex-direction: column;
    margin: 5px;
    align-items: center;
  }

  .fraction div {
    margin: 3px;
    flex: 0 0 20px;
    min-width: 30px;
    color: white;
    font-family: 'Roboto', sans-serif;
    text-align: center;
  }

  .splitter {
    height: 0;
    border: 1px solid black;
    padding: 0 6px;
    width: 100%;
  }
  .operator {
    padding: 10px;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
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
