const CONTAINER = document.getElementById("list_container")
const INPUT = document.querySelector("#input")

let shopping_items = []


function renderItems() {

    shopping_items.map((item) => {
        const itemElement = document.createElement("li")
