const ProductDetail = () => {
    // Sample product data, replace with actual data fetching logic
    const product = {
        id: 1,
        name: "Sample Product",
        description: "This is a detailed description of the sample product.",
        price: 29.99,
        category: "Electronics",
        imageUrl: "https://example.com/sample-product.jpg"
    };

    return (
        <div className="product-detail">
            <h1>{product.name}</h1>
            <img src={product.imageUrl} alt={product.name} />
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Category: {product.category}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductDetail;