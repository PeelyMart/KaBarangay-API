import app from "./app";
require('dotenv').config(); 

const port = process.env.PORT || 3000; 

app.listen(port, () => {
  console.log("Serer running on port" + port);
});  
