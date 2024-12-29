import React from "react";

function Products() {
  const products = [
    {
      id: 1,
      name: "Mahsulot 1",
      description: "Bu mahsulot haqida qisqacha ma'lumot.",
    },
    {
      id: 2,
      name: "Mahsulot 2",
      description: "Bu mahsulot haqida qisqacha ma'lumot.",
    },
    {
      id: 3,
      name: "Mahsulot 3",
      description: "Bu mahsulot haqida qisqacha ma'lumot.",
    },
  ];
  return (
    <div className="bg-black text-white w-[600px] mx-auto  text-center p-5 rounded-md ">
      <h1>Mahsulotlar</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2 className=" text-xl font-medium mb-4">{product.name}</h2>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
