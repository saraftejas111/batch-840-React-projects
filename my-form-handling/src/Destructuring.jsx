import React, { useState } from "react";
import { useFormState } from "react-dom";

const Destructuring = () => {
  const [cart, setCart] = useState({
    proName: "",
    category: "",
    proPrice: "",
    quantity: "",
    totalPrice: "",
    GST: "",
    discountApplied: "",
    finalPrice: "",
  });

  // console : ...cart , totalPrice (proPrice * quantity ) ,

  // (category == 'electronics' ... gst = 16 %)

  // (category == 'grocery' ... gst = 4 %)

  // discount (total >= 100000 ... 18 % )

  //  (total >= 50,000 ... 12 % )
  
  // (total >= 10,000 ... 6 % )

  // (total >= 5000 ... 3 % )

  // for all 2 % fix


  // final bill with gst and discount

  let emp1 = { id: 101, name: "TKA", role: "dev", salary: "112233" };

  // const name = emp1.name ;
  // const role = emp1.role ;

  const { name, role } = emp1; // destructuring --> most imp

  // console.log(name)
  // console.log(role)

  const handleChange = (e) => {
    const { name, type, value } = e.target;
    setCart({ ...cart, [name]: type == "number" ? Number(value) : value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const totalP = cart.proPrice * cart.quantity;

    const gstApplied =
      cart.category == "electronics"
        ? 16
        : cart.category == "grocery"
          ? 4
          : cart.category == "fashion"
            ? 12
            : 8;
    // any other category than this will apply 8%

    const gstAmount = totalP * (gstApplied/100);

    const discApp  = (totalP >= 100000) ?  18 :
                      (totalP >= 50000) ?  12 : 
                       (totalP >= 10000) ?  6 :
                        (totalP >= 5000) ?  3 : 2 ; 

    const finalP = (totalP - (totalP * (discApp / 100))) + gstAmount ; 

    const newCart = { ...cart, totalPrice: totalP, GST: gstApplied+" %" , discountApplied: discApp+" %" , finalPrice : finalP};

    console.log(newCart);

   setCart({
    proName: "",
    category: "",
    proPrice: "",
    quantity: "",
    totalPrice: "",
    GST: "",
    discountApplied: "",
    finalPrice: "",
  });
  };

  return (
    <div>
      <h2>Product Form</h2>
      <form onSubmit={handleSubmit}>
        Product Name :{" "}
        <input
          type="text"
          name="proName"
          value={cart.proName}
          onChange={handleChange}
          required
        />{" "}
        <br />
        <br />
        Product Category :{" "}
        <input
          type="text"
          name="category"
          value={cart.category}
          onChange={handleChange}
          required
        />{" "}
        <br />
        <br />
        Product Price :{" "}
        <input
          type="number"
          name="proPrice"
          value={cart.proPrice}
          onChange={handleChange}
          required
        />{" "}
        <br />
        <br />
        Product Quantity :{" "}
        <input
          type="number"
          name="quantity"
          value={cart.quantity}
          onChange={handleChange}
          required
        />{" "}
        <br />
        <br />
        <button type="submit">Checkout</button>
      </form>
    </div>
  );
};

export default Destructuring;
