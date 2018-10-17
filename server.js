const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./app/routes/api/apiRoutes")(app);
require("./app/routes/html/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log(`App is running on: http://localhost:${PORT}`)
});