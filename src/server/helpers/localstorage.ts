const getItemsFromLocalStorage = (label : string) => {
const item : string | null | undefined = localStorage.getItem(label);
if(item){
    return item.split("")[0] === "[" || item.split("")[0] === "{" ? JSON.parse(item) : item 
}
return null
}

const setObjectIntoLocalStorage = (label : string, object : Array<any> | Object ) => {
    localStorage.setItem(label, JSON.stringify(object));
}

const setPrimativeValueInLocalStorage = (label : string, input : string | number) => {
        localStorage.setItem(label, input.toString())
}

export {getItemsFromLocalStorage, setObjectIntoLocalStorage, setPrimativeValueInLocalStorage}