const ProductCard: React.FC<{ product: { id: number; name: string; price: number; imageUrl: string; } }> = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
        </div>
    );
};

export default ProductCard;