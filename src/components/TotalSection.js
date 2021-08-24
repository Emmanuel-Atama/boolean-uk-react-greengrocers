function TotalSection(props) {
  const calculateTotal = cartItems => {
    console.log('Inside calculateTotal: ', cartItems)
    let total = 0

    props.cartItems.forEach(cartItem => {
      total = total + cartItem.item.price * cartItem.quantity
    })

    return total
  }

  const transformToString = total => `£${total.toFixed(2)}`

  const total = calculateTotal(props.cartItems)

  const totalAsString = transformToString(total)
  return (
    <div className="total-section">
      <div>
        <h3>Total</h3>
      </div>
      <div>
        <span className="total-number">{totalAsString}</span>
      </div>
    </div>
  )
}
export default TotalSection
