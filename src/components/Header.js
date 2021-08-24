function Header(props) {
  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <ul className="item-list store--item-list">
        {props.storeItems.map((item, index) => {
          // console.log('Inside storeItems Map: ', item)

          return (
            <li key={index}>
              <div className="store--item-icon">
                <img src={`/assets/icons/${item.id}.svg`} alt="storeItems" />
              </div>
              <button
                onClick={() => {
                  console.log('Inside addToCart Button')
                  props.addToCart(item)
                  // setCartItems(cartItems)
                }}
              >
                Add To Cart
              </button>
            </li>
          )
        })}
      </ul>
    </header>
  )
}
export default Header
