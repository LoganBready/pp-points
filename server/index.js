const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 4500;
const ctrl = require("./controller/controller");

//establish Middlewar e
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  // app.get("*", (req, res) => {
  //   req.sendFile(path.resolve(__dirname, "build", "index.html"));
  // });
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

//commands for the controler file
app.get("/api/points", ctrl.getPoints);
app.get("/api/login", ctrl.getLogin);
app.post("/api/points", ctrl.addStudent);
app.put("/api/points/:id", ctrl.updatePoints);
app.delete("/api/points/:id", ctrl.deletePoints);
app.put("/api/points/milestone/:id", ctrl.updateMilestone);

app.listen(port, () => console.log(`Server is up and running on ${port}...`));
