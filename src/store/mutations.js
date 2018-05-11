export default {
    addFraction (state, payload) {
        state.fractions.push({
            fractionLeft: payload.fractionLeft,
            fractionRight: payload.fractionRight,
            fractionResult: payload.fractionResult,
            operation: payload.operation,
            id: state.counter
        })
        state.counter += 1
    },
    clearStore (state) {
        state.fractions = []
        state.counter = 1
    }
}