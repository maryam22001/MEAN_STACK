let myPopup; 

function OpenWindow() {
    setTimeout(() => {
      
        myPopup = window.open("index1.html", "_blank", "width=300,height=300");
        if (myPopup) {
            setTimeout(() => {
                myPopup.close();
            }, 5000);
        }
    }, 3000);
}