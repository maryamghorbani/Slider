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
}