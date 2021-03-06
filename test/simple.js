import { createServer } from "../lib/index.js";
import { cert, key } from "./key-cert.js";
const port = 9000;

const server = createServer(
    {
        key,
        cert,
    },
    async function (req, res) {
        debugger;
        res.writeHead(200, { "Content-Type": "text/html" });
        const body =
            (true === req.socket["encrypted"] ? "HTTPS" : "HTTP") +
            " Connection!\n" +
            "alpnProtocol:" +
            req.socket.alpnProtocol +
            " \n";

        res.end(body);
    }
);

server.listen(port, "localhost", function () {
    console.log("httpolyglot server listening on port " + port);
});
