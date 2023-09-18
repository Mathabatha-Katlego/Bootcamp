// Reducer
// Reducer
function cartReducer(state, action) {
    if (state === undefined) {
        return {
            totalCost: 0, //initialize state to an empty array and total cost zero
            productCart: []
        };
    }
    switch (action.type) {
        case "addProduct":
            return {
                ...state,
                totalCost: state.totalCost + parseInt(action.productData.productPrice),
                productCart: state.productCart.concat({
                    productName: action.productData.productName,
                    productPrice: action.productData.productPrice
                })
            }
        case "deleteProduct":
            const updatedArray = state.productCart.filter(product =>
                product.productName !== action.productData.productName);
            return {
                ...state,
                totalCost: state.totalCost - parseInt(action.productData.productPrice),
                productCart: updatedArray
            }
        default:
            return state;
    }
}
export default cartReducer;