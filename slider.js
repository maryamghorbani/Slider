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
    }

    createNextAndPrevBtns () {
        let { el : sliderElement } = this.options;
        sliderElement.insertAdjacentHTML('beforeend' , `
           <a class= "next">&#10095;</a>
           <a class= "prev">&#10094;</a>
        `);

        sliderElement.querySelector('.next').addEventListener('click', () => this.incrementSlide());
        sliderElement.querySelector('.prev').addEventListener('click', () => this.decrementSlide())
    }

    incrementSlide = () => this.showSlides(this.sliderIndex += 1)
    decrementSlide = () => this.showSlides(this.sliderIndex -= 1)

    createDots() {
        let { el : sliderElement } = this.options;

        let dotElements = [ ... this.sliders ].map((slider , index) => `<span class="dot" deta-slide="${index+1}"></span>`)

        let dots = document.createElement('div');
        dots.classList.add('dots');
        dots.innerHTML = `${dotElements.join('')}`// تبدیل آیتم های یک رشته به یک لیست

        sliderElement.after(dots)

        console.log(dots)
    }

    showSlides(number) {
        if (number > this.sliders.length) this.sliderIndex = 1;
        if (number < 1) this.sliderIndex = this.sliders.length;

    }
}