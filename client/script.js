import { getItems } from "./api" 

const itemTemplate = document.getElementById('item-template')
const itemList = document.querySelector('[data-item-list]')

async function loadItems() {
    const items = await getItems()
    console.log(items)

    itemList.innerHtml = ""
    items.forEach(item => {
        const itemElement = itemTemplate.content.cloneNode(true)
        itemElement.querySelector('[data-item-name]').textContent = item.name
        const priceElement = itemElement.querySelector('[data-item-price]')
        priceElement.textContent = `$${item.price}`

        const button = itemElement.querySelector('[data-item-button]')
        if (item.purchased){
            button.classList.add('download-btn')
            button.textContent = 'Download'
        } else {
            button.classList.add('purchase-btn')
            button.textContent = 'Purchased'
        }

        itemList.append(itemElement)
    })
}

loadItems()