const Model = require('./model');
const knexConn = require('./knexfile');
const sinon = require('sinon');
const chai = require("chai");
const mockDb = require('mock-knex');

describe ('Log Test', ()=> {
 
  
    it('pass', ()=>{
      chai.expect(1).equals(1);
    });

    it('test insert', ()=> {
        const mySpy = sinon.stub(knexConn, 'insert').resolves({"a":"a"});
        const data = {a:"a"};
        Model.insertUser(data);
           
    });

      

    //         //mySpy.should.have.been.calledOnce;
    //           console.debug(result);
    //           //done();
    // });
})
