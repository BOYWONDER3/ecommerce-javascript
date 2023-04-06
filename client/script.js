import { getItems } from "./api" 

const itemTemplate = document.getElementById('item-template')
const itemList = document.querySelector('[data-item-list]')

async function loadItems() {
    const items = await getItems()

    itemList.innerHtml = ''
    items.forEach(item => {
        const itemElement = itemTemplate.content.cloneNode(true)
    })
}

loadItems()