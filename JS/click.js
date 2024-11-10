const burger = document.querySelector('.burgers'); 
const brgDescr1 = document.querySelector('.brg1Descr');
const brgDescr2 = document.querySelector('.brg2Descr');
const brg1 = document.querySelector('#brg1');
const brg2 = document.querySelector('#brg2');



function burgers() {
    brgDescr1.style.display = 'block';
    brgDescr2.style.display = 'block';
    burger.style.width = '200px';
    burger.style.height = '100px';
    burger.style.padding = '20px';
    brg1.style.display = 'flex';
    brg2.style.display = 'flex';
}