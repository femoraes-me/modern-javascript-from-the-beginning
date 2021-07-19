function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// HTTP GET REQUEST
easyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);

    let self = this; // variavel para usar objeto THIS em outro escopo

    this.http.onload = function() {
        if(self.http.status === 200) {
            callback(null, self.http.responseText);
        } else {
            callback('Error: ' + self.http.status);
        }
    }
    
    this.http.send();
}

// HTTP POST REQUEST

// HTTP PUT REQUEST

// HTTP DELETE REQUEST
