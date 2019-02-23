import { HTTP_ERR } from './Constants';
import Util from './Util';

class AjaxHelper {
    static call(request) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        if (Util.isLogged()) {
            headers.append('X-Token', Util.getLocals('token'));
        }

        return new Promise((resolve, reject) => {
            fetch(request.url, {
                method: request.method,
                headers: headers,
                body: JSON.stringify(request.param)
            })
            .then(response => response.json())
            .then(res => {
                if (res.ok) {
                    resolve(res)
                } else {
                    reject(HTTP_ERR[res.error])
                }

            }).catch(err => {
                reject(HTTP_ERR[err.error])
            })
        });
    }
}

export default AjaxHelper;