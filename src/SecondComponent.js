import React from 'react';
class MySecondComponent extends React.Component {
    constructor(props){
        super(props)
       this.state = { 
            year:parseInt(this.props.year)
         }
         this.incrementYear=this.incrementYear.bind(this)
         this.decrementYear=this.decrementYear.bind(this)

        }
        incrementYear=function(){
            this.setState({year:this.state.year+1})
        }
        decrementYear=function()
        {
            this.setState({year:this.state.year-1})

        }
        render() { 
            return ( 
                <div>
                    Name: {this.props.sname}
                    <br></br>
                    
                    Location: {this.props.slocation}
                    <br></br>
                    Year: {this.state.year}
                    <button onClick={this.incrementYear}>Increment</button>
                    <button onClick={this.decrementYear}>Decrement</button>
                    <hr></hr>

                    </div>
             );
        }
    
    
}
 
export default MySecondComponent;