import bodyParser from 'body-parser';
import colors from 'colors';
import express from 'express';

import Routes from './Routes';

class Server {

    constructor(http_port){
        this.http_port = http_port;
        this.app = express();
        this.app.use(bodyParser.json());
    }

    run() {
        this.addRoutes();
        this.start();
    }

    addRoutes() {
        Routes.getRoutes().forEach((route) => {
            if(route.method === 'post') {
                this.app.post(route.path, route.handler);
            } else {
                this.app.get(route.path, route.handler);
            }
        });
    }

    start() {
        this.app.listen(this.http_port, () => {
            console.log(colors.green('Listening http on port: ' + this.http_port));
        });
    }

}

module.exports = Server;