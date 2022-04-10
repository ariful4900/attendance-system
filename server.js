const express = require("express");
const morgan = require("morgan");
const cors = require('cors')
const connectionDB = require("./db");
const router = require('./Routes/index')

const app = express();

app.use([morgan("dev"), express.json(), cors()]);
app.use(router)

app.get("/", (req, res)=>{
   return res.status(200).json({
        message: "Root Route Getting successful"
    })
})

//Not Found Error
app.use((_req, _res, next) => {
  const error = new Error("Resource Not Found");
  error.status = 400;
  next(error);
});

// Error Handler
app.use((err, _req, res, _next) => {
  if (err.status) {
    return res.status(err.status).json({
      error: err.message,
    });
  } else {
    return res.status(500).json({
      error: "Something Went Wrong",
    });
  }
});

const PORT = process.env.PORT || 4000;

connectionDB("mongodb://localhost:27017/practice-attendanceDB").then(() => {
  console.log("Database Connection Successfully");
  app.listen(PORT, () => {
    console.log(`Server is connected on PORT ${PORT}`);
  });
}).catch(error=>{
    console.log(error);
})
