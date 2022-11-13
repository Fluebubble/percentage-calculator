import PercentOfValue from 'components/PercentOfValue/PercentOfValue';
import React, { Component } from 'react';

class Calculator extends Component {
  state = {
    initialValue: 0,
    percentageOfValue: {
      firstValue: 0,
      secondValue: 0,
      result: 0,
    },
  };

  handleSubmit = () => {
    this.setState({
      percentageOfValue: {
        result: (this.state.firstValue / this.state.secondValue) * 100,
      },
    });
  };

  handlePercentageOfValue = e => {
    const currentName = e.currentTarget.name;
    console.log(currentName);
    this.setState({
      percentageOfValue: {
        [currentName]: Number(e.currentTarget.value),
      },
    });
    // secondValue: Number(e.currentTarget.value),
    //   //result: Number(this.state.firstValue) / Number(this.state.secondValue) * 100
  };

  // handlePercentageOfValue = e => {
  //   const currentName = e.currentTarget.name;
  //   console.log(currentName);
  //   this.setState((prevState) => {
  //     return {
  //       percentageOfValue: {
  //         [currentName]: Number(e.currentTarget.value),
  //       },
  //     };
  //     // secondValue: Number(e.currentTarget.value),
  //     //   //result: Number(this.state.firstValue) / Number(this.state.secondValue) * 100
  //   });
  // };

  render() {
    return (
      <>
        <PercentOfValue
          result={this.state.result}
          onChange={this.handlePercentageOfValue}
          onSubmit={this.handleSubmit}
        />
      </>
    );
  }
}

export default Calculator;
