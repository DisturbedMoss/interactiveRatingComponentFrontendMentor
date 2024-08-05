const labels = document.querySelectorAll('.ratingLabel');

labels.forEach(ratingLabel => {
    ratingLabel.addEventListener('click', ()=> {
        labels.forEach(ratingLabel => ratingLabel.classList.remove('active'));
        ratingLabel.classList.add('active');
    })
})
const radio1 = document.querySelector('.label1');
const radio2 = document.querySelector('.label2');
const radio3 = document.querySelector('.label3');
const radio4 = document.querySelector('.label4');
const radio5 = document.querySelector('.label5');

let rating = 0;

const divGrid = document.querySelector('.contentGrid');
const divThank = document.querySelector('.contentThank');
const submitBtn = document.querySelector('#Btn');

document.addEventListener('click', function(event) {
    const element = event.target;
    
        if(element.classList.contains('label1')) {
            event.preventDefault();          
            rating = 1;
            console.log(`radio 1: ${radio1}`);
        } else if(element.classList.contains('label2')) {
            event.preventDefault();
            rating = 2;
            console.log(`radio 2: ${radio2}`);
        }else if(element.classList.contains('label3')) {
            event.preventDefault();
            rating = 3;
            console.log(`radio 3: ${radio3}`);
        }else if(element.classList.contains('label4')) {
            event.preventDefault();
            rating = 4;
            console.log(`radio 4: ${radio4}`);
        }else if(element.classList.contains('label5')){
            event.preventDefault();
            rating = 5;
            console.log(`radio 5: ${radio5}`);

        }else event.preventDefault();
})

Btn.addEventListener('click', (event) => {
    if(rating == 0){
        event.preventDefault();
    }else{
        event.preventDefault();
        divGrid.style.display = 'none';
        divThank.style.display = 'grid';

        const result = document.querySelector('#pRating');

        result.innerHTML = `You selected ${rating} out of 5`;
    }
})