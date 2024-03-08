import express from "express";
import movieRouter from "../routes/movies.js";
import aboutRouter from "../routes/about.js";
import bookingRouter from "../routes/booking.js";
import signupRouter from "../routes/signup.js";
import loginRouter from "../routes/login.js";
import apiRouter from "../routes/api.js";


const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.get("/", (req, res) => {
    res.render("index");
});
app.use('/api', apiRouter);
app.use("/movies", movieRouter);
app.use("/about", aboutRouter);
app.use("/booking", bookingRouter);
app.use("/signup", signupRouter);
app.use("/login", loginRouter);

export default app;