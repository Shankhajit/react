import React from 'react';
import axios from "axios";
import DisplayFriends from './displayFriend';
class RemoteData extends React.Component {
    constructor(props)
    {
        super(props)
        this.state={
            friends:[]
        }
    }
    state = {  }
    componentWillMount(){
        this.getRemoteData()
    }
    getRemoteData=function()
    {
        axios.get("http://localhost:1300/all").then((response)=>{
            console.log(response.data)
            this.setState({friends:response.data})
            console.log("Display friends state")
            console.log(this.state.friends)
        })
    }
    displayRemoteData=function()
    {
        console.log("Use displayFriend component to render data")
        //loop throug state (array of json object) and work wth one jsson obj
        //iterate wth help of map till end of array
        return this.state.friends.map((friend)=>{
            console.log(friend);
            return (<DisplayFriends 
            name={friend.name}
            location={friend.location}
            age={friend.age}></DisplayFriends>)
        })
    }
    render() { 
        return ( 
            <div>
                Getting remote data..... 
                <br></br>
                Friend details
                <br></br>
                {this.displayRemoteData()}

            </div>
         );
    }
}
 
export default RemoteData;