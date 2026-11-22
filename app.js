
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

// Application details
app.get("/", (req, res) => {
    res.json({
        application: "CloudOps Command Center",
        message: "Cloud infrastructure monitoring dashboard",
        status: "Running",
        version: process.env.APP_VERSION || "2.0.0"
    });
});

// Health check
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "Healthy",
        application: "CloudOps Command Center"
    });
});

// Application information
app.get("/api/info", (req, res) => {
    res.json({
        application: "CloudOps Command Center",
        technology: "Node.js + Express",
        environment: process.env.NODE_ENV || "production",
        platform: "AWS EC2",
        containerization: "Docker",
        runtime: process.version,
        region: process.env.AWS_REGION || "ap-southeast-2"
    });
});

module.exports = app;
