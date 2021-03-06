// const express = require('express');
import express from "express";
const app = express();

const PORT = 5500;

function handleListening() {
    console.log(`Listening on : http://localhost:${PORT}`);
}


const handleHome = (req, res) => res.send("Hello from home");
// function handleHome(req, res){
//     // console.log('Hi from home!!');
//     res.send("Hello from home");
// }

const handleProfile = (req, res) => res.send("You are on my profile");
// function handleProfile(req, res){
//     res.send("You are on my profile");
// }

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);