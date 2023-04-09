import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader =async()=> {
    const loadedProducts = await fetch ('products.json');
    const products = await loadedProducts.json();

    // if cart data is in database, you have to use async await
    const storedCart = getShoppingCart();
    const savedCart = [];
    console.log(storedCart)

    for(const id in storedCart) {
        const addadProduct = products.find(pd => pd.id === id);

        if (addadProduct) {
            const quantity = storedCart[id];
            addadProduct.quantity = quantity;
            savedCart.push(addadProduct);
        }
    }



    console.log(products)
    return savedCart;

}

export default cartProductsLoader;