const express = require("express");
const cors = require("cors");
const { dataBaseConnection } = require("./configs/dataBase");
const { productRouter } = require("./routes/product");
const { orderRouter } = require("./routes/orders");
const { userRouter } = require("./routes/user");
const { authenticatorLayer } = require("./middleware/authenticator");
const { messageRouter } = require("./routes/message");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.status(200).json({ message: "Welcome To E-commerce Management Backend" });
});

app.use("/api/auth", userRouter);

app.use("/api", productRouter);

app.use("/api", messageRouter);

app.use("/api", authenticatorLayer, orderRouter);

app.listen(8080, async () => {
  try {
    console.log("server is Started at 8080");
    await dataBaseConnection;
    console.log("Server is Connected to DataBase ");
  } catch (error) {}
});


// when user is getting orders show user specific orders
// total price is not coming while fetching the orders