import { assert } from "https://deno.land/std@0.200.0/assert/assert.ts";
import argumentsParser from "../../Utils/argumentsParser.ts";

Deno.test("should call parser with success", () => {
  const mockedArguments: string[] = [];
  const args = argumentsParser(mockedArguments);
  assert(args);
});

Deno.test("parser should return true when help argument is passed", () => {
  const mockedArguments: string[] = ["--help"];
  const args = argumentsParser(mockedArguments);
  assert(args.help);
});

Deno.test("parser should return false when help argument is passed wrongly", () => {
  const mockedArguments: string[] = ["help"];
  const args = argumentsParser(mockedArguments);
  assert(!args.help);
});
