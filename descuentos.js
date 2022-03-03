function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;   
}



const coupons = [
    {
        name: 'XX10',
        discount: 10,

    },
    {
        name: 'XX20',
        discount: 20,

    },
    {
        name: 'XX30',
        discount: 30,

    },
]





function OnClickButtonPriceDiscount(){
    const inputPrice = document.getElementById('InputPrice');
    const priceValue = inputPrice.value;
    
    const InputCoupon = document.getElementById('InputCoupon');
    const couponValue = InputCoupon.value;

    const iscouponValueValid = function (coupon) {
        return coupon.name == couponValue;
    }

    const userCoupon = coupons.find(iscouponValueValid);

    if (!userCoupon) {
        alert('El cupon no es valido intenta nuevamente. Cupon: ' + String(couponValue))
    } else {
        const precioConDescuento = calcularPrecioConDescuento(priceValue, userCoupon.discount);

        const resultP = document.getElementById('ResultP');
        resultP.innerText = 'El precio con descuento son: $' + precioConDescuento;

    }
    
    
}