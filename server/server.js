const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

<<<<<<< HEAD
const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT;
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.use(
  cors({
    origin: ["https://ebazardeploy.onrender.com"],
  })
);
=======
// Middleware
const allowedOrigins = ["http://localhost:5173, https://ebazardeploy.onrender.com"];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 204,
  credentials: true, // Allow credentials like cookies
};
app.use(cors(corsOptions)); //for dev
// app.use(cors());

>>>>>>> 96930d6 (server.js changes)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "..", "client", "dist")));

<<<<<<< HEAD
app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
		if (err) {
			console.error('Error sending file:', err);
		}
	});
});

app.post("/pay", async (req, res) => {
  console.log(req.body.token);
  await Stripe.charges.create({
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  });
=======
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"), (err) => {
    if (err) {
      console.error("Error sending file:", err);
    }
  });
});
// Replace the URI with your MongoDB connection string
const mongoURI = process.env.DB;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define a User Schema
const userSchema = new mongoose.Schema({
  displayName: String,
  email: String,
});

const User = mongoose.model("User", userSchema);

// API endpoint for saving user data
app.post("/login", async (req, res) => {
  const { displayName, email } = req.body;
  console.log(req.body);

  if (!displayName || !email) {
    return res
      .status(400)
      .json({ error: "Both displayName and email are required." });
  }

  try {
    // Check if the email already exists in the database
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ error: "Email already exists." });
    }

    // If the email is not in use, create a new user
    const newUser = new User({
      displayName,
      email,
    });

    await newUser.save();

    return res.status(201).json({ message: "User created successfully." });
  } catch (error) {
    return res.status(500).json({ error: "An error occurred." });
  }
>>>>>>> 96930d6 (server.js changes)
});

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
})