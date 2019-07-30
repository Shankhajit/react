import React from 'react';

class DisplayFriends extends React.Component {
    state = {  }
    render() { 
        return (  
            <div>
                
                {this.props.name} is from {this.props.location} since {this.props.age}
            </div>
        );
    }
}
 
export default DisplayFriends;