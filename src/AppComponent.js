import React, {Component} from 'react';
import MySecondComponent from './SecondComponent';

class  MyFirstComponent extends Component {
   
    render() { 
        return ( <div>
            Hello from {this.props.children} <MySecondComponent
            sname={this.props.name}
            slocation={this.props.location}
            year={this.props.children}></MySecondComponent>
            <br></br>
        </div>);
    }
}
 
export default MyFirstComponent;
