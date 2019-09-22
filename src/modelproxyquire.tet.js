const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const proxyquire = require('proxyquire'); // include proxyquire


const expectedResult = [];
const knexQuery = {
  where: sinon.stub().returnsThis(), // because we want to call `returning` afterwards
  returning: sinon.stub().resolves(expectedResult) // resolve it as promise
}
const myknexStub = sinon.stub().returns(knexQuery);
const myrepo = proxyquire('../src', { '../knexfile': myknexStub }); // your source file and stub myknex here

describe(('Test My Module'), () => {
  it('no record', async () => {
    // const result = await myrepo.get({ userId: 1 });

    // // many options to unit test the function    
    // expect(myknexStub.calledWith('users')).to.be.ok;
    // expect(knexQuery.where.calledWith({ id: 1 })).to.be.ok;
    // expect(knexQuery.returning.calledWith('*')).to.be.ok;
    // expect(knexQuery.returning.calledAfter(knexQuery.where)).to.be.ok;
    // expect(result).to.deep.equal(expectedResult);
  });
});