import { Component } from 'react';

class AjaxHelper extends Component {
    static async activateUser(url, param) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(param)
        })

        return await response.json();
    }
}

export default AjaxHelper;