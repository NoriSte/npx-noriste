#! /usr/bin/env node

const boxen = require("boxen");
const { bold } = require("chalk").default;
const chalk = require("chalk");
const links = require("./links");

const color = "#f36";
const chain = chalk.hex(color);

const highestLength = links
  .map(link => link[0])
  .reduce((acc, key) => (key.length > acc ? key.length : acc), 0);

const lines = [
  chain.bold("Stefano Magni (NoriSte)"),
  "Passionate, positive-minded Front-end developer.",
  "JavaScript and testing lover.",
  "",
  ...links.map(([key, link]) => bold(` ${key.padStart(highestLength, " ")}: `) + chain(link))
];
const message = lines.join("\n");

const box = boxen(message, {
  borderColor: color,
  borderStyle: "round",
  margin: 1,
  padding: 1
});

process.stdout.write(box + "\n");
