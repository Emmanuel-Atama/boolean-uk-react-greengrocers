function AddButton(props) {
  return (
    <button
      className="quantity-btn add-btn center"
      onClick={() => props.addToCart(props.cartItem.item)}
    >
      +
    </button>
  )
}
export default AddButton
