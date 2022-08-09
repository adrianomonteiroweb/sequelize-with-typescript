import sinon from "sinon";

describe("### Users Controllers Tests.", () => {
  const request = {};
  const response = {};
  const data_created = {
    status: 200,
    message: "User created successfully.",
  };

  before(() => {
    request.body = {};

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(_, "").resolves(data_created);
  });

  after(() => {});

  it("1/1 - It must be possible to create a user.", async () => {
    expect(response.status.calledWith(data_created.status)).to.be.equal(true);
    expect(response.json.calledWith(data_created.message)).to.be.equal(true);
  });
});
