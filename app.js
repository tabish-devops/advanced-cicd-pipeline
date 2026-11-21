const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(__dirname, "public"), {
    index: false
}));

// Dashboard route
app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to DevOps Employee Portal",
        status: "Running",
        version: process.env.APP_VERSION || "1.0.0"
    });
});

// Health check route
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "Healthy",
        application: "DevOps Employee Portal"
    });
});

// Application information
app.get("/api/info", (req, res) => {
    res.json({
        application: "DevOps Employee Portal",
        technology: "Node.js + Express",
        environment: process.env.NODE_ENV || "development"
    });
});

module.exports = app;