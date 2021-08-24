import AddButton from './AddButton'
import CartList from './CartList'
import RemoveButton from './RemoveButton'
import TotalSection from './TotalSection'

function MainCart(props) {
  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {props.cartItems.map((cartItem, index) => {
            console.log('Inside cartItems Map: ', cartItem)
            return (
              <CartList
                index={index}
                cartItem={cartItem}
                removeFromCartButton={props.removeFromCartButton}
                RemoveButton={RemoveButton}
                addToCart={props.addToCart}
                AddButton={AddButton}
              />
            )
          })}
        </ul>
      </div>
      <TotalSection cartItems={props.cartItems} />
    </main>
  )
}
export default MainCart
