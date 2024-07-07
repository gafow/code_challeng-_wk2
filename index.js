const CONTAINER = document.getElementById("list_container")
const INPUT = document.querySelector("#input")

let shopping_items = []


function renderItems() {

    shopping_items.map((item) => {
        const itemElement = document.createElement("li")

     itemElement.innerHTML = `
        <div >
        <p class=${item.isPurchased && 'isPurchased'}>${item.name}</p>
        <button class=${item.isPurchased && 'btn_purchased'} onclick="purchasedItem('${item.name}')">${item.isPurchased ? 'Purchased' : 'Purchase'}</button>
        </div>
        `
        CONTAINER.appendChild(itemElement)
    })
}

function addItems() {
    const value = INPUT.value;
    shopping_items.push({
        name: value,
        isPurchased: false
    }) // add values to the array
    INPUT.value = "" // reset input value
    CONTAINER.innerHTML = '' // clears the container to avoid repetition
    renderItems()
}




// purchase item
function purchasedItem(item) {
    const obj = shopping_items.find(product => product.name === item)
    obj.isPurchased = true
    CONTAINER.innerHTML = ''
    renderItems()

}




