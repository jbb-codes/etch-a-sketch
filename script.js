const defaultRows = 16;
const defaultColumns = 16;


let oldGridSize;
const gridContainer = document.querySelector("#myGrid");
gridContainer.setAttribute('style', `width:320px`)

function createGrid(rows, columns){
    for(i = 0; i < rows; i++){
        for(j = 0; j < columns; j++){
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            gridContainer.appendChild(gridItem);
            gridItem.addEventListener('mouseover', () => {
                gridItem.style.backgroundColor = 'blue';
            })
        }
    }
    oldGridSize = rows;
}

createGrid(defaultRows, defaultColumns);


function clearGrid(rows, columns){
    for(i = 0; i < rows; i++){
        for(j = 0; j < columns; j++){
            document.querySelector('.grid-item').remove();
        }
    }    
}

const body = document.querySelector('body');
const gridSizeBtn = document.createElement('button');
gridSizeBtn.setAttribute('id', 'grid-size-btn');
gridSizeBtn.textContent = 'Grid Size';
body.appendChild(gridSizeBtn);
body.insertBefore(gridSizeBtn, gridContainer);

gridSizeBtn.addEventListener('click', () => {
    let newGridSize = prompt('Enter the number of squares per side.');
    let newGridWidth = 20 * newGridSize;
    gridContainer.setAttribute('style', `width:${newGridWidth}px`);
    clearGrid(oldGridSize, oldGridSize);
    createGrid(newGridSize, newGridSize);
});


