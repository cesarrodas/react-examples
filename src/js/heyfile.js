import React from 'react';

export class Hello extends React.Component {
  render(){
    const array = [1,2,3,4,5,6,7,8,9,10];
    return (
      <div className="hello">
        I will be full of react Examples!
        {[...array]}
      </div>
    );
  }
}
