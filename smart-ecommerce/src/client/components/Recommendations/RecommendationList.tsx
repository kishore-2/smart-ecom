export const RecommendationList = () => {
    // Sample data for recommendations
    const recommendations = [
        { id: 1, name: "Product 1", price: 29.99, imageUrl: "url_to_image_1" },
        { id: 2, name: "Product 2", price: 39.99, imageUrl: "url_to_image_2" },
        { id: 3, name: "Product 3", price: 49.99, imageUrl: "url_to_image_3" },
    ];

    return (
        <div className="recommendation-list">
            <h2>Recommended for You</h2>
            <ul>
                {recommendations.map((product) => (
                    <li key={product.id}>
                        <img src={product.imageUrl} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>${product.price.toFixed(2)}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};