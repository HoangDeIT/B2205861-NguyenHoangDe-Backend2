const app = require("./app");
const config = require("./app/config");

const PORT = config.app.port;

app.listen(PORT, () => {
    console.log(`Server running. Use our API on port: ${PORT}`);
});