import React from "react";

function App() {
  const products = [
    {
      id: 1,
      name: "Apple iPhone 16 Pro",
      price: "₹1,29,999",
      category: "Mobile",
      image: "https://tse2.mm.bing.net/th/id/OIP.FGhTFSJAR9DGo06KOQg_JgHaEK?pid=Api&h=220&P=0",
    },
    {
      id: 2,
      name: "Samsung Galaxy S25",
      price: "₹89,999",
      category: "Mobile",
      image: "https://tse1.mm.bing.net/th/id/OIP.1-ruoF6P3KZ4x8NNiU7PxgAAAA?pid=Api&h=220&P=0",
    },
    {
      id: 3,
      name: "OnePlus 13",
      price: "₹69,999",
      category: "Mobile",
      image: "https://oasis.opstatics.com/content/dam/oasis/page/2024/global/phones/13/specs/13-blue.png",
    },
    {
      id: 4,
      name: "MacBook Air M4",
      price: "₹1,14,999",
      category: "Laptop",
      image: "https://tse4.mm.bing.net/th/id/OIP.zj5R5u7fmvssuGCl0hkPDgHaEK?pid=Api&h=220&P=0",
    },
    {
      id: 5,
      name: "Dell XPS 14",
      price: "₹1,39,999",
      category: "Laptop",
      image: "https://tse2.mm.bing.net/th/id/OIP.3XyffanF0GqOLm7YeRMNEwAAAA?pid=Api&h=220&P=0",
    },
    {
      id: 6,
      name: "HP Pavilion",
      price: "₹69,999",
      category: "Laptop",
      image: "https://tse4.mm.bing.net/th/id/OIP.gyciweDGf7EulZxvw-0jqgHaFj?pid=Api&h=220&P=0"
    },
    {
      id: 7,
      name: "Sony WH-1000XM5",
      price: "₹29,999",
      category: "Headphones",
      image: "https://tse4.mm.bing.net/th/id/OIP.Z8HNaobgSexexSKccKwcoAHaHa?pid=Api&h=220&P=0",
    },
    {
      id: 8,
      name: "Boat Rockerz 550",
      price: "₹2,499",
      category: "Headphones",
      image: "https://tse1.mm.bing.net/th/id/OIP.aHOROYL8H_iGErnrQyw59wHaHa?pid=Api&h=220&P=0"
    },
    {
      id: 9,
      name: "Apple Watch Series 10",
      price: "₹49,999",
      category: "Smart Watch",
      image: "https://tse2.mm.bing.net/th/id/OIP.X7XUNvu7Pztku5Al5VkPBAHaHa?pid=Api&h=220&P=0",
    },
    {
      id: 10,
      name: "Samsung Galaxy Watch Ultra",
      price: "₹54,999",
      category: "Smart Watch",
      image: "https://tse3.mm.bing.net/th/id/OIP.JWVm0Encp6hX0fYorvV8IwHaE8?pid=Api&h=220&P=0",
    },
    {
      id: 11,
      name: "Canon EOS R10",
      price: "₹84,999",
      category: "Camera",
      image: "https://tse1.mm.bing.net/th/id/OIP.MbTioPJTKCTv2_U8935S3AHaE_?pid=Api&h=220&P=0",
    },
    {
      id: 12,
      name: "Nikon Z50",
      price: "₹79,999",
      category: "Camera",
      image: "https://tse1.mm.bing.net/th/id/OIP.0j6BvfFBDSNy00jAaqmy6AHaGb?pid=Api&h=220&P=0",
    },
    {
      id: 13,
      name: "Sony Bravia 55\" 4K",
      price: "₹72,999",
      category: "Television",
      image: "https://tse1.mm.bing.net/th/id/OIP.-U_-zOVCPm4kkj2APmbbjwHaEv?pid=Api&h=220&P=0",
    },
    {
      id: 14,
      name: "LG OLED Smart TV",
      price: "₹1,19,999",
      category: "Television",
      image: "https://tse3.mm.bing.net/th/id/OIP.bWcePjWlf-N_z-qN_od_lQHaE6?pid=Api&h=220&P=0",
    },
    {
      id: 15,
      name: "iPad Air",
      price: "₹64,999",
      category: "Tablet",
      image: "https://tse4.mm.bing.net/th/id/OIP.9A3l5z4gyBr8VZvq4K5gPAHaIN?pid=Api&h=220&P=0",
    },
    {
      id: 16,
      name: "Samsung Galaxy Tab S10",
      price: "₹58,999",
      category: "Tablet",
      image: "https://tse2.mm.bing.net/th/id/OIP.oy0A_YKwIKy9na-de9SfZwHaE2?pid=Api&h=220&P=0",
    },
    {
      id: 17,
      name: "Logitech MX Master 3S",
      price: "₹9,999",
      category: "Accessories",
      image: "https://tse3.mm.bing.net/th/id/OIP.y6GHrP7YN_YLMa_HiO8NyAHaEK?pid=Api&h=220&P=0",
    },
    {
      id: 18,
      name: "Mechanical Keyboard",
      price: "₹5,499",
      category: "Accessories",
      image: "https://tse2.mm.bing.net/th/id/OIP.8bPgvwAxMaiBumhDlruoFQHaEX?pid=Api&h=220&P=0",
    },
    {
      id: 19,
      name: "JBL Flip 6",
      price: "₹11,999",
      category: "Speaker",
      image: "https://tse1.mm.bing.net/th/id/OIP.Ay9jY2fgSiTRvzEYUMhOLwHaEK?pid=Api&h=220&P=0",
    },
    {
      id: 20,
      name: "Amazon Echo Dot",
      price: "₹4,999",
      category: "Smart Device",
      image: "https://tse1.mm.bing.net/th/id/OIP.aQ_Jt3PaO334g7kQdW1w3wHaEy?pid=Api&h=220&P=0",
    },
  ];

  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial, Helvetica, sans-serif;
        }

        body{
          background:#eef2f7;
        }

        .container{
          width:95%;
          margin:auto;
          padding:30px 0;
        }

        h1{
          text-align:center;
          margin-bottom:30px;
          color:#2c3e50;
        }

        .products{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
          gap:25px;
        }

        .card{
          background:#fff;
          border-radius:12px;
          box-shadow:0 5px 15px rgba(0,0,0,.15);
          transition:.3s;
          overflow:hidden;
        }

        .card:hover{
          transform:translateY(-8px);
        }

        .card img{
          width:100%;
          height:220px;
          object-fit:cover;
        }

        .details{
          padding:15px;
          text-align:center;
        }

        .details h2{
          font-size:20px;
          color:#333;
          margin-bottom:10px;
        }

        .category{
          color:#777;
          margin-bottom:8px;
        }

        .price{
          color:#27ae60;
          font-size:22px;
          font-weight:bold;
          margin-bottom:15px;
        }

        button{
          background:#3498db;
          color:white;
          border:none;
          padding:10px 20px;
          border-radius:8px;
          cursor:pointer;
          font-size:16px;
        }

        button:hover{
          background:#2c80b4;
        }
      `}</style>

      <div className="container">
        <h1>🛒 Product Catalog</h1>

        <div className="products">
          {products.map((product) => (
            <div className="card" key={product.id}>
              
              <img src={product.image} alt={product.name} />
              <div className="details">
                <h2>{product.name}</h2>
                <p className="category">{product.category}</p>
                <p className="price">{product.price}</p>
                <button>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

