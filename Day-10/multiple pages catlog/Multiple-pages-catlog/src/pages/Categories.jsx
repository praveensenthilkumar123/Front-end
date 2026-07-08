function Categories() {
  const categories = [
    "Electronics",
    "Fashion",
    "Shoes",
    "Watches",
    "Furniture",
    "Books",
    "Sports",
    "Accessories",
  ];

  return (
    <div className="page">
      <h1>Categories</h1>

      <div className="category-container">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <h3>{category}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;