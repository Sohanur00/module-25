console.log('this is separete js file');


// option 2 onclick 
function makeRed(){

    document.body.style.backgroundColor='red';
}

// option 3
const makeBlueButton = document.getElementById('make blue');
makeBlueButton.onclick = makeBlue;

function makeBlue(){
document.body.style.backgroundColor ='blue'

}

// option 4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink)

function makePink(){
document.body.style.backgroundColor = 'pink';

}

// another 4 
const makeGreenButton = document.getElementById('make-Green')
makeGreenButton.addEventListener('click', function makeGreen(){
document.body.style.backgroundColor = 'green';

})

// option 4 final
**
document.getElementById('make-goldenrod').addEventListener('click',function(){
    document.body.style.backgroundColor ='goldenrod';
    
    })