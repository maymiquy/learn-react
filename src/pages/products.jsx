import { Fragment, useEffect, useState, useRef } from "react";
import CardProduct from "../components/Partials/CardProduct";
import Button from "../components/Elements/Button";
import Counter from "../components/Partials/Counter";
import { Link } from "react-router-dom";
import { getProducts } from "../services/product.services";

// const products = [
//   {
//     id: 1,
//     name: "iPhone 13 Pro",
//     price: 10000000,
//     img: "/img/product-ip.jpg",
//     desc: "iPhone 13 Pro Max Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//   },
//   {
//     id: 2,
//     name: "iPhone 14 Pro",
//     price: 15000000,
//     img: "/img/product-ip.jpg",
//     desc: "iPhone 14 Pro Max Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//   },
//   {
//     id: 3,
//     name: "iPhone 20 Pro Ultraman",
//     price: 115000000,
//     img: "/img/product-ip.jpg",
//     desc: "iPhone 20 Pro Ultraman Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//   },
//   {
//     id: 4,
//     name: "iPhone 200 Pro Ultraman",
//     price: 11500000000,
//     img: "/img/product-ip.jpg",
//     desc: "iPhone 2000 Pro Ultraman Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//   },
// ];

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((accumulator, item) => {
        const product = products.find((product) => product.id === item.id);
        return accumulator + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const handleRemoveFromCart = (id) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === id) {
          const updatedItem = {
            ...item,
            qty: item.qty - 1,
          };
          if (updatedItem.qty === 0) {
            return null;
          }
          return updatedItem;
        }
        return item;
      })
      .filter(Boolean);

    setCart(updatedCart);

    if (updatedCart.length === 0) {
      setTotalPrice(0);
    }
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const email = localStorage.getItem("email");
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  const totalPriceRef = useRef(null);
  const tableHead = useRef(null);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  });

  useEffect(() => {
    if (cart.length > 0) {
      tableHead.current.style.display = "table-row";
    } else {
      tableHead.current.style.display = "none";
    }
  });

  return (
    <Fragment>
      <div className="flex justify-end bg-slate-900 h-12 shadow-xl text-white items-center px-10">
        <p className="text-lg text-center">{email} </p>
        <Button classname="h-6 bg-red-500 ms-2" onClick={handleLogout}>
          <Link to="/login">Logout</Link>
        </Button>
      </div>
      <div className="flex justify-center py-2">
        <div className="w-4/6 flex flex-nowrap mx-10 my-10 overflow-auto justify-start">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.HCard img={product.image} />
                <CardProduct.BCard title={product.title}> {product.description} </CardProduct.BCard>
                <CardProduct.FCard price={product.price} id={product.id} handleAddToCart={handleAddToCart} />
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6 me-8 bg-slate-100 rounded-xl shadow-xl overflow-auto py-10 my-10">
          <h1 className="text-3xl font-bold text-blue-500 ml-5 mb-2">Cart</h1>
          <table className="text-left text-sm table-auto border-separate overflow-auto border-spacing-x-5">
            <thead>
              <tr ref={tableHead}>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find((product) => product.id === item.id);
                  return (
                    <tr key={item.id}>
                      <td className="whitespace-nowrap text-xs pt-5">{product.title}</td>
                      <td className="pt-5 text-xs">{product.price.toLocaleString("id-ID", { style: "currency", currency: "USD" })}</td>
                      <td className="pt-5 text-xs">{item.qty}</td>
                      <td className="pt-5 text-xs">{(item.qty * product.price).toLocaleString("id-ID", { style: "currency", currency: "USD" })}</td>
                      <td className="pt-5 text-md">
                        <Button classname="h-6 font-bold bg-red-600" onClick={() => handleRemoveFromCart(item.id)}>
                          -
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceRef}>
                <td className="font-bold pt-20" colSpan={3}>
                  Total Price :{" "}
                </td>
                <td className="font-bold pt-20">{totalPrice.toLocaleString("id-ID", { style: "currency", currency: "USD" })}</td>
                <td className="font-bold pt-20">
                  <Button classname="h-6 bg-green-600">Buy</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center">
        <Counter></Counter>
      </div>
    </Fragment>
  );
};

export default ProductsPage;

// Sintaks sederhana penggunaan useState

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// };
