import assert from 'assert';
import proxyquire from 'proxyquire';
import sinon from 'sinon';
import sinonStubPromise from 'sinon-stub-promise';


describe('Access', () => {
    var AccessStub, DatastoreStub;

    beforeEach(() => {
        DatastoreStub = sinon.stub();
        AccessStub = proxyquire('../src/Access', {
            './Datastore': DatastoreStub
        });
    });

    describe('handlePublicAccess', () => {
        it('should send 404 when hash is not in params', () => {
            let reqStub = sinon.stub(),
                resStub = sinon.stub();
            reqStub.params = {};
            let sendStatusStub = sinon.stub();
            resStub.sendStatus = sendStatusStub;
            AccessStub.handlePublicAccess(reqStub, resStub);
            sinon.assert.calledWithExactly(sendStatusStub, 404);
        });
    });

    describe('handlePublicAccess', () => {
        it('should send 404 when hash is not found in `Datastore`', () => {
            let reqStub = sinon.stub(),
                resStub = sinon.stub(),
                sendStatusStub = sinon.stub(),
                getAccessorStub = sinon.stub();
            reqStub.params = {hash: 'FOOBAR'};
            resStub.sendStatus = sendStatusStub;
            getAccessorStub.returns(null);
            DatastoreStub.getAccessor = getAccessorStub;
            AccessStub.handlePublicAccess(reqStub, resStub);
            sinon.assert.calledWithExactly(sendStatusStub, 404);
        });
    });


    describe('handlePublicAccess', () => {
        it('should send accessData from `Datastore`', () => {
            let reqStub = sinon.stub(),
                resStub = sinon.stub(),
                sendStatusStub = sinon.stub(),
                sendStub = sinon.stub(),
                getAccessorStub = sinon.stub(),
                getAccessDataitemStub = sinon.stub(),
                accessDataitemOutput = {
                  name: 'SPAM'
                };
            reqStub.params = {hash: 'FOOBAR'};
            resStub.sendStatus = sendStatusStub;
            resStub.send = sendStub;
            getAccessorStub.returns({isPublic: true});
            DatastoreStub.getAccessor = getAccessorStub;
            getAccessDataitemStub.returns(accessDataitemOutput);
            DatastoreStub.getAccessDataitem = getAccessDataitemStub;
            AccessStub.handlePublicAccess(reqStub, resStub);
            sinon.assert.notCalled(sendStatusStub);
            sinon.assert.calledWithExactly(sendStub, accessDataitemOutput);
        });
    });

});

