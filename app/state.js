function getDatafromLocalStorage(){
    return JSON.parse(localStorage.getItem("store"));
}

let store = getDatafromLocalStorage() || [];