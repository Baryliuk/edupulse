export const calculateDiscount = (price: number): number => {
    if(price >= 100) {
        return price * 0.9; 
    }
    return price;
};