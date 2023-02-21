const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000; // you can use any port number here; i chose to use 3001

server.use(middlewares);
server.use(router);

server.listen(port,()=>(
    console.log("Json server is running on localhost http://localhost:3000/")
));

// https://mock3-jsonserver.onrender.com/users/?id=1&id=2&_sort=age&_order=desc