import Access from './Access';

class Routes {

    static getRoutes() {
        return [{
            path: '/secret/:hash',
            handler: Access.handlePublicAccess,
            method: 'get'
        },
        {
            path: '/create/public',
            handler: Access.handleCreatePublicAccess,
            method: 'post'
        }];
    }

}

module.exports = Routes;