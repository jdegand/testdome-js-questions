const DiscountType = {
    Standard: "Standard",
    Seasonal: "Seasonal",
    Weight: "Weight"
};

function getDiscountedPrice(cartWeight, totalPrice, discountType) {
    switch (discountType) {
        case DiscountType.Seasonal:
            return totalPrice - (totalPrice * 0.12);
        case DiscountType.Weight:
            if (cartWeight > 10) {
                return totalPrice - (totalPrice * 0.18);
            } else {
                return totalPrice - (totalPrice * 0.06);
            }
        default:
            return totalPrice - (totalPrice * 0.06);
    }
}

console.log(getDiscountedPrice(12, 100, DiscountType.Weight));