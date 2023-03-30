import { getItems } from "./api"

async function loadItems() {
    const items = await getItems()
}

loadItems()