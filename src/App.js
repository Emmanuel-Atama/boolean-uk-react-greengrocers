import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'
import Header from './components/Header'
import MainCart from './components/MainCart'
import IconsMadeBy from './components/IconsMadeBy'

const initialStoreItems = [
  {
    id: '001-beetroot',
    name: 'beetroot',
    price: 0.35
  },
  {
    id: '002-carrot',
    name: 'carrot',
    price: 0.35
  },
  {
    id: '003-apple',
    name: 'apple',
    price: 0.35
  },
  {
    id: '004-apricot',
    name: 'apricot',
    price: 0.35
  },
  {
    id: '005-avocado',
    name: 'avocado',
    price: 0.35
  },
  {
    id: '006-bananas',
    name: 'bananas',
    price: 0.35
  },
  {
    id: '007-bell-pepper',
    name: 'bell pepper',
    price: 0.35
  },
  {
    id: '008-berry',
    name: 'berry',
    price: 0.35
  },
  {
    id: '009-blueberry',
    name: 'blueberry',
    price: 0.35
  },
  {
    id: '010-eggplant',
    name: 'eggplant',
    price: 0.35
  }
]
export default function App() {
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  const [cartItems, setCartItems] = useState([])
  console.log('Inside State StoreItems: ', storeItems)
  console.log('Inside State CartItems: ', cartItems)

  const addToCart = storeItem => {
    console.log('Inside addToCart function: ', storeItem, cartItems)
    let itemFound = false
    const updatedCartItems = cartItems.map(cartItem => {
      if (storeItem.id === cartItem.item.id) {
        const cartItemToUpdate = {
          ...cartItem,
          quantity: cartItem.quantity + 1
        }
        itemFound = true
        return cartItemToUpdate
      } else {
        return cartItem
      }
    })

    if (!itemFound) {
      const newCartItem = {
        item: storeItem,
        quantity: 1
      }

      console.log('Item Not Found!')

      setCartItems([...cartItems, newCartItem])
    } else {
      // console.log('Updated Items: ', updatedCartItems)

      setCartItems(updatedCartItems)
    }
  }

  const removeFromCartButton = storeItem => {
    const updatedCartItems = cartItems.map(cartItem => {
      if (storeItem.id === cartItem.item.id) {
        if (cartItem.quantity > 1) {
          const updatedCartItem = {
            ...cartItem,
            quantity: cartItem.quantity - 1
          }
          return updatedCartItem
        } else {
          return null
        }
      } else {
        return cartItem
      }
    })

    const cartItemToRemove = updatedCartItems.filter(cartItem => cartItem)
    setCartItems(cartItemToRemove)
  }

  return (
    <>
      <Header storeItems={storeItems} addToCart={addToCart} />

      <MainCart
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCartButton={removeFromCartButton}
      />

      <IconsMadeBy />
    </>
  )
}
