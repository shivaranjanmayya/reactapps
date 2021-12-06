import { React, Component } from 'react';
class Calculation extends Component {
    constructor() {
        super();
        this.state = { firstnum: 'First Number', secondnum: 'Second Number', res: 'Result' };
    }
    doCalculate = (e) => {
        switch (e.target.value) {
<<<<<<< HEAD
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
=======
            case '+': this.setState({ res: parseInt(this.state.firstnum) + parseInt(this.state.secondnum) });
                break;
            case '-': this.setState({ res: parseInt(this.state.firstnum) - parseInt(this.state.secondnum) });
                break;
            case '*': this.setState({ res: parseInt(this.state.firstnum) * parseInt(this.state.secondnum) });
                break;
            case '/': this.setState({ res: parseInt(this.state.firstnum) / parseInt(this.state.secondnum) });
                break;
        }
    }
    render() {
        return (
            <div style={{ marginLeft: '600px' }}>
>>>>>>> 6aacb9e86da33609fb69f118546dfe5eb4ea7049
                <h1>Calculator</h1>
                <p>{this.state.firstnum}</p>
                <p>{this.state.secondnum}</p>
                <p>{this.state.res}</p>
                <p>Enter first number : </p>
<<<<<<< HEAD
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
=======
                <input style={{ width: '200px' }} onChange={
                    (e) => {
                        this.setState({ firstnum: e.target.value })
                    }
                }></input><br />

                <p>Enter second number : </p>
                <input style={{ width: '200px' }} onChange={
                    (e) => {
                        this.setState({ secondnum: e.target.value })
                    }
                }></input><br /><br />

                <button style={{ width: '50px', marginLeft: '5px' }} value='+' onClick={(e) => {
                    this.doCalculate(e);
                }}>+</button>

                <button style={{ width: '50px', marginLeft: '5px' }} value='-' onClick={(e) => {
                    this.doCalculate(e);
                }}>-</button>

                <button style={{ width: '50px', marginLeft: '5px' }} value='*' onClick={(e) => {
                    this.doCalculate(e);
                }}>*</button>

                <button style={{ width: '50px', marginLeft: '5px' }} value='/' onClick={(e) => {
                    this.doCalculate(e);
                }}>/</button>

            </div>
>>>>>>> 6aacb9e86da33609fb69f118546dfe5eb4ea7049
        )
    }
}

export default Calculation;