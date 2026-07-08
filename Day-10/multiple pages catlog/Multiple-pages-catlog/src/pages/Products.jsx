import { useState } from "react";

function Products() {
  const products = [
    { id: 1, name: "Laptop", price: 65000, category: "Electronics" },
    { id: 2, name: "Smartphone", price: 30000, category: "Electronics" },
    { id: 3, name: "Headphones", price: 2500, category: "Electronics" },
    { id: 4, name: "Watch", price: 4500, category: "Accessories" },
    { id: 5, name: "Shoes", price: 3500, category: "Fashion" },
    { id: 6, name: "T-Shirt", price: 1200, category: "Fashion" },
    { id: 7, name: "Backpack", price: 2200, category: "Accessories" },
    { id: 8, name: "Keyboard", price: 1800, category: "Electronics" },
  ];

  const [search, setSearch] = useState("");

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ textAlign: "center" }}>Product Catalog</h1>

      <input
        type="text"
        placeholder="Search Product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          margin: "20px 0",
          fontSize: "16px",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        {filtered.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,.2)",
            }}
          >
            <img
              src={`https://picsum.photos/200?random=${product.id}`}
              alt={product.name}
              style={{ width: "100%", borderRadius: "8px" }}
            />

            <h3>{product.name}</h3>

            <p>
              <strong>₹{product.price}</strong>
            </p>

            <p>{product.category}</p>

            <button
              style={{
                background: "#007bff",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;