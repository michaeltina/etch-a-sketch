const container = document.getElementById('container')

for (let row = 0; row < 16; row ++) {
const row = document.createElement('div');
row.classList.add('row');

    for (let column = 0; column < 16; column ++){
        const square = document.createElement('div');
        square.classList.add("square");

        row.append(square);
    }
container.append(row)
}

const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'lightgreen';
    })
})

const btn = document.createElement('button');

btn.classList.add('button');
btn.textContent = 'Clear All';
btn.style.padding = '6px 12px' 
btn.style.margin = '30px 0'

document.body.append(btn);

btn.addEventListener('click', () => {
    squares.forEach( square => {
        square.style.backgroundColor = 'white';
    })
})


const newGrid = document.createElement('button');

newGrid.textContent = 'New Grid';
newGrid.style.padding = '6px 12px';


document.body.prepend(newGrid)