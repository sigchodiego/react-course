/**
 * 
 * @param {Array} products cartProduct: Array of objects 
 * @returns {number} total price
 */
const totalPrice = (products) => {
    return products.reduce((total, product) => total + product.price, 0);
}

export default totalPrice