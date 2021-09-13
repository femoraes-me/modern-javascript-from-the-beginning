/**
* @version 2.0.0
* @author Felipe Moraes
* @license MIT
*
**/

class EasyHTTP {
    // HTTP Get Request
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    }

    // HTTP Post Request
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .then(err => reject(err))
        });
    }

    // HTTP PUT REQUEST 
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });    
    }

    // HTTP DELETE REQUEST
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {'Content-type':'application/json'}
            })
            .then(res => res.json())
            .then(() => resolve('Dados apagados...'))
            .catch(err => reject(err));
        });
    }
}