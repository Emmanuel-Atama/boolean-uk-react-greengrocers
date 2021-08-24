function CartList(props) {
  return (
    <li key={props.index}>
      <img
        className="cart--item-icon"
        src={`assets/icons/${props.cartItem.item.id}.svg`}
        alt="beetroot"
      />
      <p>{props.cartItem.item.name}</p>
      <props.RemoveButton
        cartItem={props.cartItem}
        removeFromCartButton={props.removeFromCartButton}
      />
      <span className="quantity-text center">{props.cartItem.quantity}</span>
      <props.AddButton addToCart={props.addToCart} cartItem={props.cartItem} />
    </li>
  )
}
export default CartList
