import React from 'react';
class Counter extends React.Component {
    constructor(props){
    super(props)
    this.state = {
        "name":"PPP",
        score:8,
        friends:["ram","prem"]
      }
      this.changeName=this.changeName.bind(this)
    }
      changeName=function(){
          console.log(this.state.name)
          this.setState({name:"BBB",score:this.state.score+2})
      }

    render() { 
        return ( 
            <div>
                Counter: {this.state.name}
                <br></br>
                Score: {this.state.score}
                <br></br>
                Friends: {this.state.friends}
                <button onClick={this.changeName}>Change</button>
                </div>
         );
    }
} 

export default Counter;