const { Server } = require("../Server");
const dotenv = require("dotenv");

describe("Server", () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  afterEach(() => {
    Server.stop();
    delete process.env.DARK_SKY_API_KEY;
  });

  it("logs the URL and port when started", done => {
    Server.start({ port: 4002 }).then(() => {
      expect(console.log).toHaveBeenCalledWith(
        "GraphQL server ready at http://localhost:4002/"
      );
      done();
    });
  });

  describe("when one of the API keys is not defined", () => {
    beforeEach(() => {
      dotenv.config = jest.fn(() => ({ parsed: { FOO: "foo" } }));
    });

    it("throws an error", done => {
      try {
        Server.start({ port: 4002 });
      } catch (e) {
        expect(e.message).toEqual(
          expect.stringContaining("Undefined environment variable detected")
        );
        done();
      }
    });
  });
});
