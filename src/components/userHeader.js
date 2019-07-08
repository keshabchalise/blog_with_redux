import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions';

class UserHeader extends Component{

    componentDidMount(){
        this.props.fetchUser(this.props.userId);
    }

    render(){
        const {user} = this.props;
        if(!user) return <div>Username</div>
        return <div>{user.username}</div>
    }
}

const mapStateToProps=(state)=>{
    return {user:state.user};
}

export default connect(mapStateToProps,{fetchUser:fetchUser})(UserHeader);