export interface ItemData {
  itemId: number,
  itemName: string,
  itemDescription: string,
  itemPrice: number,
  imageUrl: string,
  quantity: number,
  isSpecialItem: boolean
}

export interface CartLineItem {
  cartItemKey: ItemData,
  quantity: number,
  total: number,
  id: number
}