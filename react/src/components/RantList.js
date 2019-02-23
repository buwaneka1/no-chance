import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Rant from './Rant';
import Loader from './Loader';
import AjaxHelper from '../helpers/Ajax';
import { URL_GET_POST_LIST } from '../helpers/Constants';
import '../styles/rantlist.css';

class RantList extends Component {
    constructor(prop) {
        super(prop);

        this.initState = {
            isLoading: true,
            posts: []
        };

        this.state = this.initState;
    }
    componentDidMount() {
        AjaxHelper.call({
            method: 'GET',
            url: URL_GET_POST_LIST,
            param: ''
        }).then(data => {
            console.log('data: ', data);
            if (data.ok) {
                this.setState({
                    posts: data.posts
                });
            }
        }).catch(error => {
            console.log('err: ', error);
        }).then(() => {
            this.setState({
                isLoading: false
            });
        });
    }

    render() {
        const isLoading = this.state.isLoading;

        return(
            <div className="post-list">
                    
                <Link to="/rant/1">
                    <Rant />
                </Link>
                    
                <Loader isLoading={isLoading}/>

                <div className="rant__add" title="Add Rant">+</div>        

            </div>
        );
    }
}

export default RantList;