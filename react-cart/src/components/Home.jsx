import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const Home = () => {
    const productlist = [
        {
            name: "Apple Macbook",
            price: 120000,
            imageSrc:
                "https://m.media-amazon.com/images/I/71vFKBpKakL._SX569_.jpg",
            id: "122131251453",
        },
        {
            name: "Shoe",
            price: 499,
            imageSrc:
                "https://rukminim1.flixcart.com/image/612/612/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70",
            id: "122342343",
        },
        {
            name: "Pen",
            price: 50,
            imageSrc:
                "https://5.imimg.com/data5/SELLER/Default/2020/10/PX/KF/AW/20193325/ink-pen-500x500.jpg",
            id: "12356687823",
        },
        {
            name: "Samsung S22 Ultra",
            price: 50000,
            imageSrc:
                "https://m.media-amazon.com/images/I/71J8tz0UeJL._SL1500_.jpg",
            id: "435346745123",
        },
    ];

    const dispatch = useDispatch();

    const addToCarthandler = (product) => {
        toast.success("Added to cart.");
        dispatch({ type: "addToCart", payload: product });
        dispatch({ type: "calculatePrice" });
    };

    return (
        <div className="home">
            {productlist.map(({ name, price, imageSrc, id }) => (
                <Productcard
                    key={id}
                    name={name}
                    id={id}
                    price={price}
                    imageSrc={imageSrc}
                    handler={addToCarthandler}
                />
            ))}
        </div>
    );
};

const Productcard = ({ name, id, price, handler, imageSrc }) => (
    <div className="product-card">
        <img
            src={imageSrc}
            alt={name}
        />
        <p>{name}</p>
        <h4>₹{price}</h4>
        <button
            onClick={() => handler({ name, id, price, imageSrc, quantity: 1 })}
        >
            Add to cart
        </button>
    </div>
);

export default Home;
