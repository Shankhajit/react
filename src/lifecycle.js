import React from 'react';

class Lifecycle extends React.Component {
    constructor(props){
        super(props)
        this.state={
            check:1
        }
        this.changeCheck=this.changeCheck.bind(this)

    }
    componentWillMount(){
        console.log("Component will mount.")
    }
    componentDidMount()
    {
        console.log("Component is mounted in browser")
    }
    componentWillUpdate()
    {
        console.log("Component will update!!!"+this.state.check)
    }
    componentDidUpdate()
    {
        console.log("Component has updated"+ + this.state.check)
    }
    changeCheck=function()
    {
        this.setState({check:this.state.check-1})
    }

    render() { 
        return (
            <div>
                Exploring Component Lifecycle!!!!
               <h1> {this.state.check}</h1>
               <button onClick={this.changeCheck}>Change</button>

                </div>
          );
    }
}
 
export default Lifecycle;