import http from "http";
import express from "express";
import path from "path";
import { spawn } from "child_process";
import { Server as SocketIO } from "socket.io";
import { config } from "dotenv";
config();

const app = express();
const server = http.createServer(app);
const io = new SocketIO(server);

const options = [
  "-i",
  "-",
  "-c:v",
  "libx264",
  "-preset",
  "ultrafast",
  "-tune",
  "zerolatency",
  "-r",
  `${25}`,
  "-g",
  `${25 * 2}`,
  "-keyint_min",
  25,
  "-crf",
  "25",
  "-pix_fmt",
  "yuv420p",
  "-sc_threshold",
  "0",
  "-profile:v",
  "main",
  "-level",
  "3.1",
  "-c:a",
  "aac",
  "-b:a",
  "128k",
  "-ar",
  128000 / 4,
  "-f",
  "flv",
  `rtmp://a.rtmp.youtube.com/live2/${process.env.YOUTUBE_KEY}`,
];

const ffmpegProcess = spawn("ffmpeg", options);

ffmpegProcess.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

ffmpegProcess.stderr.on("data", (data) => {
  console.error(`stderr: ${data}`);
});

ffmpegProcess.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});

app.use(express.static(path.resolve("./public")));

io.on("connection", (socket) => {
  console.log("New connection", socket.id);

  socket.on("binarystream", (stream) => {
    console.log("Binary stream received");
    ffmpegProcess.stdin.write(stream, (err) => {
      console.log("error", err);
    });
  });
});

app.get("/", (res) => {
  res.sendFile(path.resolve("./public/index.html"));
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
