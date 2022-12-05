import React, { Component } from 'react';

import axios from 'axios';
import Artistlist from '../components/Home/artistlist'

import {connect } from 'react-redux'
import {artistList,artistListAll} from '../store/Actions'
import {bindActionCreators} from 'redux'



class HomeContainer extends Component {
  

    
    componentWillMount() {
        this.props.artistListAll()
    }

    getKeywords = (event) => {
        let key = event.target.value;
        this.props.artistList(key)
    }


    render() {
        
        return ( 
            <div > 
                <Artistlist artists={this.props.artists.artistList} />
            </div>
        )
    }

}

function mapStateToProps(state) {
    return { 
        artists: state.artists,
        dark: state.dark,
    }

}

function mapDispatchToProps(dispatch) {
     return bindActionCreators( {artistList,artistListAll}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
