import { React, Component } from 'react';
class ComponentLifeCycle extends Component {
    constructor() {
        super();
        this.state = { buttonText:'result' }
        console.log('constructor called');
    }
    static getDerivedStateFromProps = () => {
       console.log('getDerivedStateFromProps is called');
       
    }

    doSomething=(e)=>{
        console.log('Called'+e.target.innerText);
        this.setState({buttonText:e.target.innerText});
    }
    
    render() {
        console.log('Render is called');
        return (
            <div>
                <h1>Component Life cycle</h1>
                <button onClick={this.doSomething}>Click Me 1</button>
                <h2>{this.state.buttonText}</h2>
            </div>
        )
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate called');
        return true;

    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate is called');
      
      }
      componentDidUpdate() {
        console.log('componentDidUpdate is called');
        
      }
      componentDidMount(){
          console.log('componentDidMount called')
      }
}

export default ComponentLifeCycle;