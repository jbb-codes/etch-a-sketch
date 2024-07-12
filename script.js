const defaultRows = 16;
const defaultColumns = 16;
let oldGridSize;

const gridContainer = document.querySelector("#myGrid");

function createGrid(rows, columns, gridItemWidth, gridItemHeight){
    for(i = 0; i < rows; i++){
        for(j = 0; j < columns; j++){
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            gridItem.setAttribute('style', `width:${gridItemWidth + 'px'}; height:${gridItemHeight + 'px'}`);
            gridContainer.appendChild(gridItem);
            gridItem.addEventListener('mouseover', () => {
                gridItem.style.backgroundColor = 'blue';
            })
        }
    }
    oldGridSize = rows;
}

createGrid(defaultRows, defaultColumns, 40, 40);

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

// Change grid size.
gridSizeBtn.addEventListener('click', () => {
    let newGridSize = prompt('Enter the number of squares per side.');
    let newGridItemWidth = 640 / newGridSize;
    let newGridItemHeight = 640 / newGridSize;
    clearGrid(oldGridSize, oldGridSize);
    createGrid(newGridSize, newGridSize, newGridItemWidth, newGridItemHeight);
});


