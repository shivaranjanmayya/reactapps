import React, { Component } from 'react';
import { Col, Row, Card, Button } from 'react-bootstrap';
class Products extends Component {
    constructor() {
        super();
        this.state = {
            products: [

            ]

        };
    }

    filterUpdate=()=>{
         fetch('http://localhost:3000/stock.json')
         //fetch('https://fastrack-8c441.web.app/stock.json')
         .then(response => response.json())
         .then(items => this.setState({ products: items }));

    }

    componentDidMount() {
        this.filterUpdate();
       
    }

    filterItems = (e) => {
        if(e.target.value==''){
            this.filterUpdate();
        }
        else{
        this.setState({
            products: this.state.products.filter(el =>
                el.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1)

        });

    }
}

    render() {
        return (
            <section className="product">
                <h3 className="text-center pb-3 text-black fw-bold">STYLISH WATCHES</h3>
                <div>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.filterItems} />
                    </form>
                </div>


                <Row xs={1} md={3} className="g-4 pt-3">
                    {this.state.products.map(product => (
                        <Col key={product.id}>
                            <Card className="bg-transparent pt-0 pb-0">
                                <Card.Header><Card.Img variant="top" src={product.image} /></Card.Header>
                                <Card.Body className="text-center text-black">
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text className="text-center text-black">
                                        {product.price}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-center pt-3">
                                    <Button variant="teal" className="text-white">Buy Now</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </section>
        );
    }
}
export default Products;


