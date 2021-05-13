class slider {
    sliderIndex = 1;

    constructor(options) {
        this.options = options;
        this.initialStuff();

        this.createNextAndPrevBtns()
        this.createDots();

        this.showSlides(1);
    }

    initialStuff () {
        let { el: sliderElement , slideClass , auto } = this.options;

        if ( ! sliderElement ) throw  Error('Slider element is not exists');

        Number.isInteger(auto) ? this.auto = auto : this.auto = 0;
        this.sliders = [ ...sliderElement.children].filter(elm => elm.classList.contains(slideClass));
        console.log(sliders);
    }

    createNextAndPrevBtns () {
        let { el : sliderElement } = this.options;
        sliderElement.insertAdjacentHTML('beforeend' , `
           <a class= "next">&#10095;</a>
           <a class= "prev">&#10094;</a>
        `);

        sliderElement.querySelector('.next').addEventListener('click', () => console.log('click'));
        sliderElement.querySelector('.prev').addEventListener('click', () => console.log('click'))
    }

    createDots() {

    }

    showSlides(number) {

    }
}