"use strict";

const { execSync } = require("child_process");

describe("npx noriste", () => {
  test("Should print all the info", async () => {
    var output = execSync("node ./src/index.js");
    expect(output.toString()).toMatchSnapshot();
  });
});
