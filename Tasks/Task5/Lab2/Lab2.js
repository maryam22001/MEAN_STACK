///clone the cploure squre into random colours:
//1-random colour func
//2-cloning func


const first =document.getElementById("FirstSquare");
const container = document.getElementById("container");

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};



first.addEventListener("click", () => {
const clone = first.cloneNode(true);
clone.id = "";
clone.style.backgroundColor = getRandomColor()    ;
container.appendChild(clone);


});
