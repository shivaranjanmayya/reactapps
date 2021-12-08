import { React, Component } from 'react';
class Calculation extends Component {
    constructor() {
        super();
        this.state = { firstnum: 'First Number', secondnum: 'Second Number', res: 'Result' };
    }
    doCalculate = (e) => {
        switch (e.target.value) {
            case '+': this.setState({ res: parseFloat(this.state.firstnum) + parseFloat(this.state.secondnum) });
                break;
            case '-': this.setState({ res: parseFloat(this.state.firstnum) - parseFloat(this.state.secondnum) });
                break;
            case '*': this.setState({ res: parseFloat(this.state.firstnum) * parseFloat(this.state.secondnum) });
                break;
            case '/': this.setState({ res: parseFloat(this.state.firstnum) / parseFloat(this.state.secondnum) });
                break;
           
        }
    }
    submitFormHandler = (e) => {
        e.preventDefault();
    }
    render() {
        return (

            <form onSubmit={this.submitFormHandler} style={{ display: 'grid', justifyContent: 'center' }}>
                <h1>Calculator</h1>
                <p>{this.state.firstnum}</p>
                <p>{this.state.secondnum}</p>
                <p>{this.state.res}</p>
                <p>Enter first number : </p>
                <input style={{ width: '200px', height: '20px' }} onChange={
                    (e) => {
                        this.setState({ firstnum: e.target.value })
                    }
                }></input>

                <p>Enter second number : </p>
                <input style={{ width: '200px', height: '20px' }} onChange={
                    (e) => {
                        this.setState({ secondnum: e.target.value })
                    }
                }></input>
                <div style={{ display: 'flex', justifyContent: 'space-between', height: '30px', marginTop: '20px' }}>

                    <button style={{ width: '50px' }} value='+' onClick={(e) => {
                        this.doCalculate(e);
                    }}>+</button>

                    <button style={{ width: '50px' }} value='-' onClick={(e) => {
                        this.doCalculate(e);
                    }}>-</button>

                    <button style={{ width: '50px' }} value='*' onClick={(e) => {
                        this.doCalculate(e);
                    }}>*</button>

                    <button style={{ width: '50px' }} value='/' onClick={(e) => {
                        this.doCalculate(e);
                    }}>/</button>
                </div>
            </form>
        )
    }
}

export default Calculation;