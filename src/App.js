<<<<<<< HEAD
import React, { Component } from 'react';
import './App.css';
//import './css/bootstrap.css';
//import './js/bootstrap.bundle.min.js';
//import Calculation from './Component/Calculation';
//import Greetings from './Component/Greetings/Greetings';
//import Song from './Component/Song';
//import ComponentLifeCycle from './Component/ComponentLifeCycle';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [

      ],

    };
  }

  componentDidMount() {
    //fetch('http://localhost:3000/stock.json')
      fetch('https://myproduct-28508.web.app/stock.json')
      .then(response => response.json())
      .then(items => this.setState({ products: items }));
  }

  render() {
    return (
      <section className="product">

        <div class="container">
          <div class="row height d-flex justify-content-center align-items-center">
            <div class="col-md-5 pt-5">
              <div class="search"> <i class="fa fa-search"></i> <input type="text" class="form-control" placeholder="Search Your Item...." />
              </div>
            </div>
          </div>
        </div>

        <div className="App row row-cols-1 row-cols-md-3 g-4 pb-5 pt-5">
          {this.state.products.map(product =>
          (<div className="col" key={product.id}>
            <div className="card h-100 bg-transparent p-3 mb-1 pt-4 rounded border-2">
              <img src={product.image}
                className="card-img-top" alt="..." height="300px" />
              <div className="card-footer">
                <div className="card-body">
                  <h5 className="card-title text-white">{product.name}</h5>
                  <div className="cost">
                    {product.price}
                  </div>
                </div>
              </div>
            </div>
          </div>))}
        </div>
      </section>
    );
  }
}
export default App;
/*function App() {
  return (*/

/* <div className="App">

 <Greetings/>
 <Calculation/>
 <Song name="Matte maleyagide" year="2017" artistName="Sonu Nigam"/>
 <Song name="ondu malebillu" year="2017" artistName="Shreya Goshal"/>
 <Song name="Nannavale Nannavale" year="2017" artistName="Sonu Nigam"/>
 <Song name="Gayatri Mantra" year="2020" artistName="Anuradha Paudwal"/>
 </div>*/
/*<div className="App">


<ComponentLifeCycle/>

</div>
);
}*/
=======

import Calculation from './Component/Calculation';
import Greetings from './Component/Greetings/Greetings';
import Song from './Component/Song';

function App() {
  return (

   /* <div className="App">
      
    <Greetings/>
    <Calculation/>
    <Song name="Matte maleyagide" year="2017" artistName="Sonu Nigam"/>
    <Song name="ondu malebillu" year="2017" artistName="Shreya Goshal"/>
    <Song name="Nannavale Nannavale" year="2017" artistName="Sonu Nigam"/>
    <Song name="Gayatri Mantra" year="2020" artistName="Anuradha Paudwal"/>
    </div>*/
     <div className="App">
      
  
    <Calculation/>
  
    </div>
  );
}
>>>>>>> 6aacb9e86da33609fb69f118546dfe5eb4ea7049

/*import Details from './Product/Details';

function App() {
  return (
    <div className="App">
    <Details/>
<<<<<<< HEAD

=======
    
>>>>>>> 6aacb9e86da33609fb69f118546dfe5eb4ea7049
    </div>
  );
}*/

<<<<<<< HEAD

=======
export default App;
>>>>>>> 6aacb9e86da33609fb69f118546dfe5eb4ea7049
