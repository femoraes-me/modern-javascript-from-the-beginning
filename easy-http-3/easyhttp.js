/**
* @version 2.0.0
* @author Felipe Moraes
* @license MIT
*
**/

class EasyHTTP {
    
    // HTTP Get Request
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    // HTTP Post Request
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(data)
        });

        const resData = await response.json();
        return resData;
    }

    // HTTP PUT REQUEST 
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(data)    
        })

        const resData = await response.json();
        return resData;
    }

    // HTTP DELETE REQUEST
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {'Content-type':'application/json'}   
        })

        const resData = await 'Dados deletados...';
        return resData;
    }
}