import mockAccessors from './data/mockAccessors';
import mockAccessDataitems from './data/mockAccessDataitems';
import mockDataItemRefs from './data/mockDataItemRefs';

class Datastore {

    constructor(accessors, accessDataitems, dataItems) {
        this.accessors = accessors;
        this.accessDataitems = accessDataitems;
        this.dataItems = dataItems;
    }

    getAccessor(key) {
        return this.accessors[key];
    }

    createAccessor(dataItemRefs) {
        let key = this.createRandomKey(),
            dataToAccess = {};
        dataItemRefs.forEach((ref) => {
            dataToAccess = this.dataItems[ref];
        });
        this.accessors[key] = {isPublic: true};
        this.accessDataitems[key] = dataToAccess;
        return {key};
    }

    getAccessDataitem(key) {
        return this.accessDataitems[key];
    }

    createRandomKey() {
        return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    }

}

module.exports = new Datastore(mockAccessors, mockAccessDataitems, mockDataItemRefs);