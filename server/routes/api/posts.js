const express = require('express');

const router = express.Router();

//get posts

router.get('/',(req,res) => {
    console.log(req);
    var data = [
        {
          id: 1,
          mac: "00:00:00:00:00:00:00",
          parent: "xx:xx:xx:xx:xx:xx:xx",
          speed: "3KBPS",
          status : "ONLINE",
          layer: 1,
          sensorData: { x: 10, y: 10, z: 10 },
          time: "timestamp1",
        },
        {
          id: 2,
          mac: "11:11:11:11:11:11:11",
          parent: "00:00:00:00:00:00:00",
          speed: "3KBPS",
          status : "ONLINE",
          layer: 2,
          sensorData: { x: 10, y: 10, z: 10 },
          time: "timestamp1",
        },
        {
          id: 3,
          mac: "22:22:22:22:22:22:22",
          parent: "11:11:11:11:11:11:11",
          speed: "3KBPS",
          status : "ONLINE",
          layer: 3,
          sensorData: { x: 10, y: 10, z: 10 },
          time: "timestamp1",
        },
        {
          id: 4,
          mac: "33:33:33:33:33:33:33",
          parent: "22:22:22:22:22:22:22",
          speed: "3KBPS",
          status : "OFFLINE",
          layer: 4,
          sensorData: { x: 10, y: 10, z: 10 },
          time: "timestamp1",
        },
        {
          id: 5,
          mac: "44:44:44:44:44:44:44",
          //parent : "33:33:33:33:33:33:33",
          parent: "11:11:11:11:11:11:11",
          speed: "3KBPS",
          status : "ONLINE",
          layer: 3,
          sensorData: { x: 10, y: 10, z: 10 },
          time: "timestamp1",
        },
      ];
      var len = data.length;
      var currentTime = new Date();

    var currentOffset = currentTime.getTimezoneOffset();

    var ISTOffset = 330;   // IST offset UTC +5:30 

    var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);

    // ISTTime now represents the time in IST coordinates

    var hoursIST = ISTTime.getHours();
    var minutesIST = ISTTime.getMinutes();
    var secondsIST = ISTTime.getSeconds();
      for(var i = 0; i< len; i++){
        data[i]["time"] = `${hoursIST}:${minutesIST}:${secondsIST}`;
      }
    res.send(data)
});

module.exports = router;