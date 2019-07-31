function renderButton(product, buttonDisplay) {

    const input = buttonDisplay.querySelector('input');
    input.value = product.id;
    const img = buttonDisplay.querySelector('img');
    img.src = product.image;



}
export default renderButton;