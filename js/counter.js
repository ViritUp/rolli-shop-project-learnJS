/* const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');


btnMinus.addEventListener('click', () => {
    
    if(+counter.innerText <= 1) {
        counter.innerText = 1;
    } else {
        counter.innerText = --counter.innerText;
    }
});

btnPlus.addEventListener('click', () => {
    counter.innerText = ++counter.innerText;
}); */



window.addEventListener('click', e => {

    if(e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus') {
        const counterWrapper = e.target.closest('.counter-wrapper');
        const counter = counterWrapper.querySelector('[data-counter]');

        if(e.target.dataset.action === 'plus') {
            counter.innerText = ++counter.innerText;
        }
        
        if(e.target.dataset.action === 'minus') {
        
            if (+counter.innerText > 1) {
                counter.innerText = --counter.innerText;
            } else if (e.target.closest('.cart-wrapper') && +counter.innerText === 1 ) {
                e.target.closest('.cart-item').remove();

                toggleCartStatus();
                calcCartPriceAndDelivery();
            }
        }
    }

    if (e.target.hasAttribute('data-action') && e.target.closest('.cart-wrapper')) {
        calcCartPriceAndDelivery();
    }

});



