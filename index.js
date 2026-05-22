const chalk = require("chalk");

const deepBlue = chalk.hex("#0077BE");
const seafoam = chalk.hex("#2E8B57");
const sand = chalk.hex("#C2B280");
const coral = chalk.hex("#FF7F50");
const waveWhite = chalk.hex("#F0F8FF");

const waves = ["∼", "≈", "〜", "~"];

function randomWave() {
  return waves[Math.floor(Math.random() * waves.length)];
}

function generateTide(width) {
  let tide = "";
  for (let i = 0; i < width; i++) {
    const colors = [deepBlue, seafoam, waveWhite];
    const color = colors[i % colors.length];
    tide += color(randomWave());
  }
  return tide;
}

function getPrompt(cwd) {
  const wave = deepBlue(randomWave());
  const dir = seafoam(cwd || process.cwd());
  const anchor = sand("⚓");
  return `${wave} ${dir} ${anchor} `;
}

function getBanner() {
  const lines = [
    deepBlue("  " + generateTide(30)),
    "",
    seafoam.bold("    oceanshell v1.0.3"),
    sand("    set sail in your terminal"),
    "",
    deepBlue("  " + generateTide(30)),
  ];
  return "\n" + lines.join("\n") + "\n";
}

function getPS1() {
  return `\\[\\033[38;5;32m\\]∼ \\[\\033[38;5;34m\\]\\w \\[\\033[38;5;180m\\]⚓\\[\\033[0m\\] `;
}

function getSeaQuote() {
  const quotes = [
    "Smooth seas never made a skilled sailor.",
    "The ocean stirs the heart.",
    "A ship in harbor is safe, but that is not what ships are built for.",
    "The cure for anything is salt water: sweat, tears, or the sea.",
  ];
  return coral(quotes[Math.floor(Math.random() * quotes.length)]);
}

module.exports = { getPrompt, getBanner, getPS1, generateTide, getSeaQuote };

