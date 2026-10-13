function calculateDiscount(price, discountPercent = 10) {
    if (price < 0 || discountPercent < 0 || discountPercent > 100) {
        return "Invalid input";
    }

    let discount = price * discountPercent / 100;
    let finalPrice = price - discount;

    return {
        originalPrice: price,
        discount: discount,
        finalPrice: finalPrice
    };
}

console.log(calculateDiscount(1000, 20));