let Product = props => {
    return (
        <div className="product-box">
            <div className="products">
                <img src={props.image}
                    alt="" />
                <div className="details">
                    <h6>{props.name}</h6>
                    <div className="star">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <br />
                        <span>{props.shipping}</span> 
                    </div>
                </div>
                <div className="cost">
                    {props.price}
                </div>
            </div>
        </div>
    )
}
export default Product;