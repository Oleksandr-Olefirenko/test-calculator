export default {
    getOperations (state) {
        return state.operations
    },

    getFractions(state){
        return state.fractions
    },

    getFractionById: (state) => (id) => state.fractions.find(fraction  => fraction.id == id)
}