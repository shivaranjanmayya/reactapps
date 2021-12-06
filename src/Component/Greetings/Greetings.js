import {React, Component} from 'react';
class Greetings extends Component{
    constructor(){
        super();
        this.state={name:'Shivaranjan',email:'nsmayya@gmail.com'};
    }
    /*render(){
        return(
            <div>
                <p>{this.state.name}</p>
                <p>{this.state.name}</p>
                <p>{this.state.name}</p>
                <button onClick={()=>{
                    this.setState({name:'felight.io'})
                }}>Click Here</button>
            </div>
        )
    }*/

    render(){
        return(
            <div>
                <p>{this.state.name}</p>
                <p>{this.state.email}</p>
                <input onChange={
                    (e)=>{
                        this.setState({name:e.target.value})
                    }
                }></input>
            </div>
        )
    }

}
export default Greetings;