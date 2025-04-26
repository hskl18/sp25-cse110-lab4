function printCurrentTime() {
  const now = new Date();
  console.log(now.toLocaleTimeString());
}

setInterval(printCurrentTime, 1000);
