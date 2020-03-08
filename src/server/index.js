const dotenv = require("dotenv");
dotenv.config();

const { Server } = require("./Server");

Server.start({ port: 4000 });
