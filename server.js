const app = require("./src/app");
const appConstants = require("./src/constants/app.constants");


const port = appConstants.PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});