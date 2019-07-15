"use strict";

const CaptureStdout = require("../vendor/capture-stdout");
const links = require("./links");

describe("npx noriste", () => {
  test("Should contain all the social links", async () => {
    const captureStdout = new CaptureStdout();
    captureStdout.startCapture();

    require("./index");

    captureStdout.stopCapture();
    const output = captureStdout.getCapturedText().join(",");
    captureStdout.clearCaptureText();

    links.forEach(([key, link]) => expect(output).toEqual(expect.stringContaining(link)));
  });
});
