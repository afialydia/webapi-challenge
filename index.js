const server = require("./api/server.js");
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`\n** running on port: ${PORT} **\n`));
