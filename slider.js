class slider {
    sliderIndex = 1;

    constructor(options) {
        this.options = options;
        this.initialStuff();
    }

    initialStuff () {
        let { el: sliderElement , slideClass , auto } = this.options;

        if ( ! sliderElement ) throw  Error('Slider element is not exists');

        Number.isInteger(auto) ? this.auto = auto : this.auto = 0;

        console.log(auto)
    }
}