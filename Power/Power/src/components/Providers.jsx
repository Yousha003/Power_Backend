import CartContextProvider, { CartContext } from "./cartContext"

const Providers = ({children}) => {
    return(
        <>
        {/* <Provider store={store}> */}
          <CartContextProvider>
            { children }
          </CartContextProvider>
        {/* </Provider> */}
        </>
    )
}
export default Providers