import { spawn } from "node:child_process";
import process from "node:process";

const args = process.argv.slice(2);
const valueAfter = (flag, fallback) => {
  const index = args.indexOf(flag);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};

const hostname = valueAfter("--host", valueAfter("--hostname", "localhost"));
const port = valueAfter("--port", "3000");
const nextBin = new URL("../node_modules/next/dist/bin/next", import.meta.url).pathname;

const child = spawn(process.execPath, [nextBin, "dev", "-H", hostname, "-p", port], {
  stdio: "inherit",
});

child.on("exit", (code) => process.exit(code ?? 0));
process.on("SIGTERM", () => child.kill("SIGTERM"));
process.on("SIGINT", () => child.kill("SIGINT"));
