const Model = require('./model');
const knexDb = require('./knexfile');
const sinon = require('sinon');
const chai = require("chai");
const mockDb = require('mock-knex');
var sinonChai = require("sinon-chai");
chai.should();
chai.use(sinonChai);

describe ('Log Test', ()=> {
 
  
    it('pass', ()=>{
      chai.expect(1).equals(1);
    });

    it('test insert', ()=> {

      
        mockDb.mock(knexDb);
        var tracker = mockDb.getTracker();
        tracker.install();
        let mySpy = sinon.spy(knexDb,'insert');
        // tracker.on('insert', function sendResult(query) {
        //   query.response([
        //     {
        //       id : 1,
        //       foo : 'bar'
        //     }
        //   ]);
        // });

        const data = {a:"a"};
        Model.insertUser(data);
        mySpy.should.have.been.called;
        tracker.uninstall();
    
        
        mockDb.unmock(knexDb);
    });

      
    // const mySpy = sinon.stub(knexDb, 'insert').resolves({"a":"a"});
    //         //mySpy.should.have.been.calledOnce;
    //           console.debug(result);
    //           //done();
    // });
})
