import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Rant from './Rant';
import '../styles/rantlist.css';

class RantList extends Component {
    render() {
        return(
            <div className="post-list">
                    
                <Link to="/rant/1">
                    <Rant />
                </Link>
                    
                <div className="rant__add" title="Add Rant">+</div>        

            </div>
        );
    }
}

export default RantList;