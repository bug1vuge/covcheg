const initDiscountsSlider = () => {
    try {
        const swiper = new Swiper('.discount__slider', {

            allowTouchMove: false,

            spaceBetween: 15,
            speed: 1000,

            rewind: true,

            navigation: {
                nextEl: '.discount__slider-nextButton',
                prevEl: '.discount__slider-prevButton',
            },
        });
    } catch (error) {

    }
};

const initPopularProductsSlider = () => {
    try {
        const swiper = new Swiper('.popular-products__slider', {

            allowTouchMove: false,

            speed: 1000,

            rewind: true,

            navigation: {
                nextEl: '.popular-products__slider-nextButton',
                prevEl: '.popular-products__slider-prevButton',
            },


            breakpoints: {

                325: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },

                375: {
                    slidesPerView: 4,
                    spaceBetween: 10
                },

                550: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                },

                768: {
                    slidesPerView: 6,
                    spaceBetween: 10
                },

                1024: {
                    slidesPerView: 8,
                    spaceBetween: 10,
                },

                1440: {
                    slidesPerView: 11,
                    spaceBetween: 15
                }
            }
        });
    } catch (error) {

    }
};

const initBurgerMenu = () => {

    try {
        const burgerMenu = document.querySelector('.burger-menu');
        const burgerMenuInner = document.querySelector('.burger-menu__content');
        const searchPanel = document.querySelector('.search-panel');
        const body = document.querySelector('body');

        document.addEventListener('click', (e) => {

            const target = e.target;
            const withinBoundaries = e.composedPath().includes(burgerMenuInner);

            if (target.closest('.burger-button')) {

                burgerMenu.classList.add('visible');
                searchPanel.classList.remove('visible');

                body.style.overflow = 'hidden';

            } else if (target.closest('.burger-menu__close-button')) {

                burgerMenu.classList.remove('visible');
                body.style.overflow = 'visible';

            } else if (burgerMenu.classList.contains('visible')) {

                if (!withinBoundaries) {

                    burgerMenu.classList.remove('visible');
                    body.style.overflow = 'visible';

                };

            };

        });
    } catch (error) {

    }
};

const initSearchPanel = () => {

    try {
        const searchPanel = document.querySelector('.search-panel');
        const burgerMenu = document.querySelector('.burger-menu');

        document.addEventListener('click', (e) => {

            const target = e.target;

            const withinBoundaries = e.composedPath().includes(searchPanel);

            if (target.closest('.header__search-button')) {

                e.preventDefault();
                burgerMenu.classList.remove('visible');
                searchPanel.classList.toggle('visible');

            } else if (searchPanel.classList.contains('visible')) {
                if (!withinBoundaries) {

                    burgerMenu.classList.remove('visible');
                    searchPanel.classList.remove('visible');

                };
            };
        });
    } catch (error) {

    }
};

const initProductSlider = () => {

    try {
        const swiper = new Swiper('.product-slider', {
            pagination: {
                el: '.product-slider__pagination',
            },

            speed: 1000,

            spaceBetween: 10,

            rewind: true,
        })
    } catch (error) {

    }
};


const initProviderMap = () => {
    try {

        let center = [52.02710857207237, 113.48362199999994];

        const init = () => {
            let map = new ymaps.Map('provider__map', {
                center: center,
                zoom: 18
            });

            map.controls.remove('geolocationControl'); // удаляем геолокацию
            map.controls.remove('searchControl'); // удаляем поиск
            map.controls.remove('trafficControl'); // удаляем контроль трафика
            map.controls.remove('typeSelector'); // удаляем тип
            map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
            map.controls.remove('rulerControl'); // удаляем контрол правил
            map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
        }

        ymaps.ready(init);

    } catch (error) {

    }
};

const initTabs = (obj) => {
    try {
        const buttons = document.querySelectorAll(obj.button);
        const content = document.querySelectorAll(obj.content);
        const filters = document.querySelector('.filters');

        buttons.forEach(el => {

            el.addEventListener('click', (e) => {

                const buttonDataAttribute = el.getAttribute('data-tab-button')

                buttons.forEach(el => {
                    el.classList.remove('active');
                });

                el.classList.add('active');

                content.forEach(el => {

                    const contentDataAttribute = el.getAttribute('data-tab-content')

                    el.classList.remove('active');

                    if (buttonDataAttribute == contentDataAttribute) {
                        el.classList.add('active');
                        if (filters.classList.contains('visible')) {
                            filters.classList.remove('visible');
                            document.body.style.overflow = 'visible';
                        }
                    };
                });

            });
        });

    } catch (error) {

    }
};

const initAboutCompanySlider = () => {
    try {
        const swiper = new Swiper('.about-company__slider', {
            pagination: {
                el: '.about-company__slider-pagination',
            },

            navigation: {
                prevEl: '.about-company__slider-prev-button',
                nextEl: '.about-company__slider-next-button',
            },

            speed: 1000,

            spaceBetween: 10,

            rewind: true,
        })
    } catch (error) {

    }
};


const initFaqAccordion = () => {
    const accordionTriggers = document.querySelectorAll('.faq__accordion-trigger');
    const accordionItems = document.querySelectorAll('.faq__accordion-item');

    accordionTriggers.forEach((el, index) => {
        el.addEventListener('click', (e) => {

            const currBtnIndex = index;

            accordionItems.forEach((el, index) => {
                const currItemContent = el.querySelector('.faq__accordion-item-content');
                const currItemIndex = index;

                if (currBtnIndex === currItemIndex) {
                    el.classList.toggle('active');
                    currItemContent.style.maxHeight = `${currItemContent.scrollHeight}px`;
                };

                if (!el.classList.contains('active')) {
                    currItemContent.style.maxHeight = `${0}px`;
                };

            });

        });
    });

};

const initModal = (obj) => {
    try {
        const modal = document.querySelector(obj.modal);
        const modalInner = document.querySelector(obj.inner);
        const modalOverlay = document.querySelector(obj.overlay);


        const body = document.querySelector('body');
        const burgerMenu = document.querySelector('.burger-menu');


        document.addEventListener('click', (e) => {

            if (modal !== null) {
                const target = e.target;
                const withinBoundaries = e.composedPath().includes(modalInner);
                const paddingOffset = `${window.innerWidth - document.body.offsetWidth}px`;

                if (target.classList.contains(obj.trigger)) {

                    modal.classList.add('visible');
                    body.style.overflow = 'hidden';

                    if (burgerMenu.classList.contains('visible')) {
                        burgerMenu.classList.remove('visible')
                    };

                    body.style.paddingRight = paddingOffset;
                    modalOverlay.style.paddingRight = paddingOffset;

                } else if (modal.classList.contains('visible')) {
                    if (!withinBoundaries) {

                        modal.classList.remove('visible')
                        body.style.overflow = 'visible';
                        body.style.paddingRight = 0;
                        modalOverlay.style.paddingRight = 0;

                    };
                }
            };
        })
    } catch (error) {

    };
};

const initCatalogeFilters = (obj) => {
    try {
        const openButton = document.querySelector(obj.open);
        const filters = document.querySelector(obj.filters);
        const closeButton = document.querySelector(obj.close);
    
        openButton.addEventListener('click', (e) => {
            filters.classList.add('visible');
            document.body.style.overflow = 'hidden';
        });
    
        closeButton.addEventListener('click', (e) => {
            filters.classList.remove('visible');
            document.body.style.overflow = 'visible';
        });
    } catch (error) {
        
    }
};

initCatalogeFilters({
    open: '.cataloge__filters-button',
    filters: '.filters',
    close: '.filters__close-button'
});

initCatalogeFilters({
    open: '.company-products__tabs-show',
    filters: '.filters',
    close: '.filters__close-button'
});

initTabs({
    button: '.company-products__tabs-button',
    content: '.company-products__tabs-content-item'
});

initTabs({
    button: '.cataloge__tabs-button',
    content: '.cataloge__tabs-item'
});

initTabs({
    button: '.about-company__tabs-button',
    content: '.about-company__tabs-content-item'
});

initTabs({
    button: '.faq__tabs-button',
    content: '.faq__tabs-item'
});

initTabs({
    button: '.personal-account__tabs-button',
    content: '.personal-account__tabs-item'
});


if (window.innerWidth > 1024) {
    initModal({
        modal: '.login-modal',
        inner: '.login-modal__inner',
        overlay: '.login-modal__overlay',
        trigger: 'header__loginButton',
    });
} else {
    initModal({
        modal: '.login-modal',
        inner: '.login-modal__inner',
        overlay: '.login-modal__overlay',
        trigger: 'burger-menu__login-button'
    });
}

initModal({
    modal: '.request-modal',
    inner: '.request-modal__inner',
    overlay: '.request-modal__overlay',
    trigger: 'cataloge__send-request'
});

initModal({
    modal: '.number-modal',
    inner: '.number-modal__inner',
    overlay: '.number-modal__overlay',
    trigger: 'cataloge__show-number'
});

initModal({
    modal: '.request-modal',
    inner: '.request-modal__inner',
    overlay: '.request-modal__overlay',
    trigger: 'provider__info-send-request'
});

initModal({
    modal: '.number-modal',
    inner: '.number-modal__inner',
    overlay: '.number-modal__overlay',
    trigger: 'provider__info-show-number'
});


initModal({
    modal: '.request-modal',
    inner: '.request-modal__inner',
    overlay: '.request-modal__overlay',
    trigger: 'companies__send-request'
});

initModal({
    modal: '.number-modal',
    inner: '.number-modal__inner',
    overlay: '.number-modal__overlay',
    trigger: 'companies__show-number'
});

initModal({
    modal: '.request-modal',
    inner: '.request-modal__inner',
    overlay: '.request-modal__overlay',
    trigger: 'product__send-request'
});

initModal({
    modal: '.number-modal',
    inner: '.number-modal__inner',
    overlay: '.number-modal__overlay',
    trigger: 'product__show-number'
});


initFaqAccordion();
initAboutCompanySlider();
initProviderMap();
initProductSlider();
initSearchPanel();
initBurgerMenu();
initDiscountsSlider();
initPopularProductsSlider();