import React, { Component } from 'react';

class AjaxHelper extends Component {
    constructor(props) {
        super(props);

        const url = this.props.url;
        const param = this.props.param; 
    }

    activateUser() {
        fetch(url, {
            method: 'POST',
            body: param
        })
        .then(function(result) {
            return result
        })
        .catch(function(error) {
            return error
        })
    }
}

export default AjaxHelper;