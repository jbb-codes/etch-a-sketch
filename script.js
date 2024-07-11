const rows = 16;
const columns = 16;

const gridContainer = document.querySelector("#myGrid");

for(i = 0; i < rows; i++){
    for(j = 0; j < columns; j++){
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridContainer.appendChild(gridItem);
    }
}