import fs from "fs";

const data = fs.readFileSync("./hello.txt", "utf8");
console.log(data);
