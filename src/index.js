#! /usr/bin/env node

const boxen = require("boxen");
const { bold } = require("chalk").default;
const chalk = require("chalk");

const color = "#f36";
const chain = chalk.hex(color);

const lines = [
  chain.bold("Stefano Magni (NoriSte)"),
  "Passionate, positive-minded Front-end developer.",
  "JavaScript and testing lover.",
  "",
  bold("      Twitter: ") + chain("https://twitter.com/NoriSte"),
  bold("     LinkedIn: ") + chain("https://www.linkedin.com/in/noriste/"),
  bold("       GitHub: ") + chain("https://github.com/NoriSte"),
  bold("       Dev.to: ") + chain("https://dev.to/noriste"),
  bold("       Medium: ") + chain("https://medium.com/@NoriSte"),
  bold("          NPM: ") + chain("https://www.npmjs.com/settings/noriste/packages"),
  bold("StackOverflow: ") + chain("https://stackoverflow.com/users/700707/noriste"),
  bold("   Slides.com: ") + chain("https://slides.com/noriste"),
  bold("       Resume: ") + chain("https://www.visualcv.com/stefano-magni/")
];
const message = lines.join("\n");

const box = boxen(message, {
  borderColor: color,
  borderStyle: "round",
  margin: 1,
  padding: 1
});

process.stdout.write(box + "\n");
