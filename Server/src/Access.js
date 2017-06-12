

import Datastore from './Datastore';

class Access {

    static handlePublicAccess(req, res) {
        let params = req.params,
            hash = params['hash'];
        if (hash) {
            let accessData = Datastore.getAccessor(hash);
            if (accessData && accessData.isPublic) {
                res.send(Datastore.getAccessDataitem(hash));
                return;
            }
        }
        res.sendStatus(404);
    }

    static handleCreatePublicAccess(req, res) {
        let body = req.body,
            refs = body.refs;
        if (refs) {
            res.send(Datastore.createAccessor(refs));
            return;
        }
        res.sendStatus(404);
    }

}

module.exports = Access;