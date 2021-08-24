function RemoveButton(props) {
  return (
    <button
      className="quantity-btn remove-btn center"
      onClick={() => {
        console.log('Inside Remove From Cart')
        props.removeFromCartButton(props.cartItem.item)
      }}
    >
      -
    </button>
  )
}
export default RemoveButton
