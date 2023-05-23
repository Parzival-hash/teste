const controls1 = document.querySelectorAll(".control1");

let currentItem1 = 0;

const items1 = document.querySelectorAll(".item1");

const maxItems1 = items1.length;

controls1.forEach(control => {
    control.addEventListener('click', () =>{
        const isLeft = control.classList.contains('arrowLeft');

        
        if(isLeft){
            currentItem1 -= 1;
        }else {
            currentItem1 += 1;
        }

        if(currentItem1 + 1 >= maxItems1) {
            currentItem1 = 0;
        }

        if(currentItem1 < 0){
            currentItem1 = maxItems1 - 1;
        }
        
        console.log('control1 clicked', isLeft, currentItem1);

        items1.forEach(item1 => item1.classList.remove('currentItem1'))

        items1[currentItem1].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        })

        items1[currentItem1].classList.add("currentItem1");
    })
})




// carrossel 2

const controls2 = document.querySelectorAll(".control2");

let currentItem2 = 0;

const items2 = document.querySelectorAll(".item2");

const maxItems2 = items2.length;

controls2.forEach(control2 => {
    control2.addEventListener('click', () =>{
        const isLeft = control2.classList.contains('arrowLeft');

        
        if(isLeft){
            currentItem2 -= 1;
        }else {
            currentItem2 += 1;
        }

        if(currentItem2 >= maxItems2) {
            currentItem2 = 0;
        }

        if(currentItem2 < 0){
            currentItem2 = maxItems2 - 1;
        }
        
        console.log('control2 clicked', isLeft, currentItem2);

        items1.forEach(item2 => item2.classList.remove('currentItem2'))

        items2[currentItem2].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        })

        items2[currentItem2].classList.add("currentItem2");
    })
})




// CARROSSEL 3

const controls3 = document.querySelectorAll(".control3");

let currentItem3 = 0;

const items3 = document.querySelectorAll(".item3");

const maxItems3 = items3.length;

controls3.forEach(control3 => {
    control3.addEventListener('click', () =>{
        const isLeft = control3.classList.contains('arrowLeft');

        
        if(isLeft){
            currentItem3 -= 1;
        }else {
            currentItem3 += 1;
        }

        if(currentItem3 >= maxItems3) {
            currentItem3 = 0;
        }

        if(currentItem3 < 0){
            currentItem3 = maxItems3 - 1;
        }
        
        console.log('control3 clicked', isLeft, currentItem3);

        items1.forEach(item3 => item3.classList.remove('currentItem3'))

        items3[currentItem3].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        })

        items3[currentItem3].classList.add("currentItem2");
    })
})

