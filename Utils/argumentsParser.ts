import { parse } from "https://deno.land/std@0.200.0/flags/mod.ts";

const argumentsParser = (args: string[]) => {
  const booleanArgs = [
    "help",
  ];

  return parse(args, {
    boolean: booleanArgs,
    "--": true,
  });
};

export default argumentsParser;
