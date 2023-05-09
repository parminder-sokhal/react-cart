import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
    const { cartItems, subTotal, tax, shipping, total } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const decrementH = (id) => {
        dispatch({
            type: "decrementfromCart",
            payload: id,
        });
        dispatch({ type: "calculatePrice" });
    };
    const incrementH = (id) => {
        dispatch({
            type: "addToCart",
            payload: { id },
        });
        dispatch({ type: "calculatePrice" });
    };
    const deleteH = (id) => {
        dispatch({
            type: "deleteFromCart",
            payload: id,
        });
        dispatch({ type: "calculatePrice" });
    };
    return (
        <div className="cart">
            <main>
                {cartItems.length > 0 ? (
                    cartItems.map(({ name, id, price, imageSrc, quantity }) => (
                        <CartItem
                            key={id}
                            imageSrc={imageSrc}
                            name={name}
                            price={price}
                            quantity={quantity}
                            id={id}
                            decrementH={decrementH}
                            incrementH={incrementH}
                            deleteH={deleteH}
                        />
                    ))
                ) : (
                    <h1>No items</h1>
                )}
            </main>
            <aside>
                <h2>Subtotal: ₹{subTotal}</h2>
                <h2>Shipping: ₹{shipping}</h2>
                <h2>Tax: ₹{tax}</h2>
                <h2>Total: ₹{total}</h2>
            </aside>
        </div>
    );
};

const CartItem = ({
    imageSrc,
    name,
    price,
    quantity,
    decrementH,
    incrementH,
    deleteH,
    id,
}) => (
    <div className="card-item">
        <img
            src={imageSrc}
            alt={name}
        />
        <article>
            <h3>{name}</h3>
            <p>₹{price}</p>
        </article>
        <div>
            <button onClick={() => decrementH(id)}>-</button>
            <p>{quantity}</p>
            <button onClick={() => incrementH(id)}>+</button>
        </div>
        <AiFillDelete onClick={() => deleteH(id)} />
    </div>
);

export default Cart;
