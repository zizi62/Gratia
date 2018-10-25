
+function (){
    class Slider {
        constructor(classNameImg, imgBox, sliderBtn){
            this.classNameImg = document.querySelectorAll(classNameImg),
            this.sliderBtn = document.querySelectorAll(sliderBtn),
            this.imgBox = document.querySelector(imgBox),
            this.index = 0,
            this.quantityImg = null,
            this.marginImg = null
        }
        classQuantityImg(quantityImg) {
            this.quantityImg = quantityImg
        }  
        classMarginImg(marginImg) {
            this.marginImg = marginImg;
        }
    
        leghtImgBox(temp, marginImg, classNameImg ){
            let a = classNameImg.length;
            let line
            return line = (temp.offsetWidth + (marginImg*2))*a;
        }
        makeIndex(temp, marginImg){
            var index = temp.offsetWidth + (marginImg*2);
            return index;
        }
        btn(e, index, slipImg){
            if(e.dataset.target === "prev"){
                slipImg += index;
            } else if(e.dataset.target === "next"){
               slipImg -= index;
            }
            return slipImg; 
        }
        start() {
            let imgBox = this.imgBox;
            let btn = this.btn;
            let slipImg = 0;
            let index = this.index;
            let classNameImg = this.classNameImg;
            let makeIndex = this.makeIndex;
            let marginImg = this.marginImg;
            let sliderBtn = this.sliderBtn;
            let temp = classNameImg[0];
            let quantityImg = this.quantityImg;
            let leghtImgBox = this.leghtImgBox;
        
            function move(){
                let x= 0;
                let a = leghtImgBox(temp, marginImg, classNameImg );
                if(this.dataset.target === "next" && slipImg === (-a + index*quantityImg) || this.dataset.target === "prev" && slipImg === 0){
                    return;
                }
                else {
                index = makeIndex(temp, marginImg);
                x = btn(this, index, slipImg);
                slipImg = x;
                imgBox.style.marginLeft = x + 'px';
                }    
            }
            for(let i = 0; i < this.sliderBtn.length; i++ ) {
                this.sliderBtn[i].addEventListener('click', move);          
            }
        }
      
    }
    

class DobleDotsSlider extends Slider {
    constructor(classNameImg, imgBox, sliderBtn, sliderDots){
        super(classNameImg, imgBox, sliderBtn),
        this.sliderDots = document.querySelectorAll(sliderDots),
        this.activeClass = null;
    }
    addActiveClassDots(activeClass) {
        this.activeClass = activeClass;
    }

    dots(e){
        let num = e.dataset.target;
        return num; 
    }

    start() {
        let imgBox = this.imgBox;
        let btn = this.btn;
        let slipImg = 0;
        let index = this.index;
        let classNameImg = this.classNameImg;
        let makeIndex = this.makeIndex;
        let marginImg = this.marginImg;
        let sliderBtn = this.sliderBtn;
        let temp = classNameImg[0];
        let quantityImg = this.quantityImg;
        let leghtImgBox = this.leghtImgBox;
        let sliderDots = this.sliderDots;
        let activeClass = this.activeClass ;
        let dots = this.dots;
        let x= 0;
        index = makeIndex(temp, marginImg);
           
        function move(){
            for(let i = 0; i < sliderDots.length; i++ ) {
                sliderDots[i].classList.remove(activeClass);
            }
            let a = leghtImgBox(temp, marginImg, classNameImg );
            if(this.dataset.target === "next" && slipImg === (-a + index*quantityImg) || this.dataset.target === "prev" && slipImg === 0){
                return;
            }
            else {
            x = btn(this, index, slipImg);
            slipImg = x;
            imgBox.style.marginLeft = x + 'px';
            }  
            return  slipImg;
        }

        function moveDots (){
            let num = dots(this);
            x = btn(this, index, slipImg);
            x = -(index*num)
            imgBox.style.marginLeft = x + 'px';
            for(let i = 0; i < sliderDots.length; i++ ) {
                sliderDots[i].classList.remove(activeClass);
            }
            sliderDots[num].classList.add(activeClass);
            return x;
        }

        for(let i = 0; i < this.sliderBtn.length; i++ ) {
            this.sliderBtn[i].addEventListener('click', move); 
        }

        for(let i = 0; i < this.sliderDots.length; i++ ) {
            this.sliderDots[i].addEventListener('click', moveDots);
        }
    }
    
}

let levelSlider = new DobleDotsSlider('.slider__img','.slider__box','.btn','.slider__button-dots', );

levelSlider.classQuantityImg(1);

levelSlider.classMarginImg(0);

levelSlider.addActiveClassDots('slider__button-dots_active');

levelSlider.start()
    
}()