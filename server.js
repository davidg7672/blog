import express from "express";
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.render("index.ejs", {
        dayType: "a weekday",
        advice: "it's time to work hard",
    });
});

app.listen(port, () => console.log(`Listening on port; ${port}`));
