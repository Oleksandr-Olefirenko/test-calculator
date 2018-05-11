import math from 'mathjs'

export default {
    calculateFraction ({commit}, payload){
        function simplifyFraction (){
            const gcd = math.gcd(payload.fractionResult.numerator, payload.fractionResult.denominator)
            payload.fractionResult.numerator /= gcd
            payload.fractionResult.denominator /= gcd
        }
        switch (payload.operation) {
            case '+': {
              payload.fractionResult.numerator = payload.fractionLeft.numerator * payload.fractionRight.denominator + payload.fractionRight.numerator * payload.fractionLeft.denominator
              payload.fractionResult.denominator = payload.fractionLeft.denominator * payload.fractionRight.denominator
              break;
            }
            case '-': {
              payload.fractionResult.numerator = payload.fractionLeft.numerator * payload.fractionRight.denominator - payload.fractionRight.numerator * payload.fractionLeft.denominator
              payload.fractionResult.denominator = payload.fractionLeft.denominator * payload.fractionRight.denominator
              break;
            }
            case '*': {
              payload.fractionResult.numerator = payload.fractionLeft.numerator * payload.fractionRight.numerator 
              payload.fractionResult.denominator = payload.fractionLeft.denominator * payload.fractionRight.denominator
              break;
            }
            case '/': {
              payload.fractionResult.numerator = payload.fractionLeft.numerator * payload.fractionRight.denominator 
              payload.fractionResult.denominator = payload.fractionLeft.denominator * payload.fractionRight.numerator
              break;
            }
          }
          simplifyFraction()
          commit('addFraction', payload)
    },

    clearStore ({commit}) {
      commit('clearStore')
    }
}