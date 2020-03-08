const { Server } = require("../Server");
const dotenv = require("dotenv");

describe("Server", () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  afterEach(() => {
    Server.stop();
  });

  it("logs the URL and port when started", done => {
    Server.start({ port: 4002 }).then(() => {
      expect(console.log).toHaveBeenCalledWith(
        "GraphQL server ready at http://localhost:4002/"
      );
      done();
    });
  });
});
