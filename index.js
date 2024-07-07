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

