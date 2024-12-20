import argumentsParser from "./Utils/argumentsParser.ts";

const main = (inputArgs: string[]) => {
  const args = argumentsParser(inputArgs);
  if (args.help) {
    printHelp();
    Deno.exit(0);
  }
  const testValue = prompt("Search show:");
  console.log(`${testValue}`);
  videoScraper()
};

const videoScraper = async() => {
  const videoToScrape = 'https://vidsrc.to/embed/tv/tt0386676'
  const fileResponse = await fetch(videoToScrape);
  console.log(fileResponse)
  // const file = await Deno.open("./logo.svg", { read: true });

}

const printHelp = () => {
  console.log(`Usage: greetme [OPTIONS...]`);
  console.log("\nOptional flags:");
  console.log("  -h, --help                Display this help and exit");
  console.log("  -s, --save                Save settings for future greetings");
  console.log("  -n, --name                Set your name for the greeting");
  console.log("  -c, --color               Set the color of the greeting");
};

main(Deno.args);
