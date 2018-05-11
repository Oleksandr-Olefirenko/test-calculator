<template>
  <div>
    <h2>Define fractions</h2>
    <div class="wrapper">
      <v-fraction v-model="expression.fractionLeft"></v-fraction>
      <select v-model="expression.operation">
        <option value="" selected disabled hidden>Operator</option>
        <option v-for="(oper, index) in operations" :key="index"> {{oper}}</option>
      </select>
      <v-fraction v-model="expression.fractionRight"></v-fraction>
      <button @click="calculateFraction" class="btn">=</button>
      <v-fraction v-model="expression.fractionResult"></v-fraction>
    </div>
    <button class="btn" @click="clearExpression()">Clear</button>
  </div>
</template>

<script>
  import Fraction from '@/components/Fraction'
  import {mapGetters} from 'vuex'
  export default {
    name: 'Fraction',
    data() {
      return {
        expression: {
          fractionLeft: {
            numerator: '',
            denominator: '',
          },
          fractionRight: {
            numerator: '',
            denominator: '',
          },
          fractionResult: {
            numerator: '',
            denominator: '',
          },
          operation: '',
        },
      }
    },

    computed: {
      ...mapGetters({
        operations: 'getOperations',
      }),
    },
    methods: {
      calculateFraction () {
        if (this.expression.operation) {
          const fractionLeft = Object.assign({},this.expression.fractionLeft)
          const fractionRight = Object.assign({},this.expression.fractionRight)
          const expression = {
            fractionLeft: fractionLeft,
            fractionRight: fractionRight,
            fractionResult: this.expression.fractionResult,
            operation: this.expression.operation
          }
          this.$store.dispatch('calculateFraction', expression)
        }
      },
      clearExpression () {
        this.expression = {
          fractionLeft: {
            numerator: '',
            denominator: '',
          },
          fractionRight: {
            numerator: '',
            denominator: '',
          },
          fractionResult: {
            numerator: '',
            denominator: '',
          },
          operation: '',
        }
      }
    },
    components: {
      'v-fraction': Fraction
    }

  }
</script>

<style scoped>
  .wrapper {
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 40px;
    background: #3F51B5;
    border: 1px solid white;
  }
  .splitter {
    height: 0;
    border: 1px solid black;
    width: 100%;
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

  .select {
    padding: 5px;
    font-family: 'Roboto', sans-serif;
  }

</style>
