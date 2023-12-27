const http = require("http");

const port = 8000;

const requestHandler = (request, response) => {
  console.log(request.url);
  if (request.url === "/") {
    response.end("Hello Node.js Server");
  } else if (request.url === "/about") {
    response.end("You are in ABOUT page");
  } else {
    response.end("default page (URLs other than / or /about)");
  }
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    console.error("Something bad happended");
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
