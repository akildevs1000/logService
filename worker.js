const WebSocket = require("ws");
require('dotenv').config()
// const axios = require("axios").default;
socket.open = () => console.log("connected\n");

const fs = require("fs");
let socket = new WebSocket(process.env.ENDPOINT);

socket.onmessage = function ({ data }) {
    console.log(JSON.parse(data));
  let {
    UserCode: UserID,
    DeviceID,
    RecordDate: LogTime,
    RecordNumber: SerialNumber,
  } = JSON.parse(data).Data;

  let str = `${UserID},${DeviceID},${LogTime},${SerialNumber}`;
  console.log(str);
  let path = "logs.csv";
  // fs.appendFileSync(path, str + "\n");

  // let Hash = '$2y$10$RQ0d7Yo1ad/aTm2pEx3QvuGatA6t0qqH76m7VXYGkNjzVYqNGAQ.K';

  // axios({
  //   method: "post",
  //   url: "http://192.168.2.174:8000/api/socket",
  //   data: { UserID, DeviceID, LogTime, SerialNumber, Hash },
  // }).then(function (response) {
  //   console.log("server response");
  //   console.log(response.data);
  // });
};
