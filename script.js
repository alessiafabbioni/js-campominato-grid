//Seleziono elemento contenitore e creo i relativi box

const gridElement = document.getElementById("gridContainer");

for (let i = 0; i < 100; i++) {

    const newElement = createmyElement("div", "grid-box")
    gridElement.append(newElement);

}

//Definizione funzione

function createmyElement(tagtype, classname) {
    
    const currentElemnt = document.createElement(tagtype);
    currentElemnt.classList.add(classname);

    return currentElemnt;
}