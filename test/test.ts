import {
  assertEquals,
} from "./deps.ts";
import {
  RunLengthEncoding,
} from '../src/RunLengthEncoding.ts';

Deno.test({
  name: "It encodes a string",
  fn(): void {
    const rle = new RunLengthEncoding();
    const input = "AAAABBCCCCCDDD";
    const expected = "4A2B5C3D";
    assertEquals(expected, rle.encode(input));
  }
});

Deno.test({
  name: "It encodes a string with no duplicates",
  fn(): void {
    const rle = new RunLengthEncoding();
    const input = "ABCD";
    const expected = "1A1B1C1D";
    assertEquals(expected, rle.encode(input));
  }
});

Deno.test({
  name: "Handles null input",
  fn(): void {
    const rle = new RunLengthEncoding();
    const input = null;
    const expected = "0";
    assertEquals(expected, rle.encode(input));
  }
});

Deno.test({
  name: "Handles empty input",
  fn(): void {
    const rle = new RunLengthEncoding();
    const input = "";
    const expected = "0";
    assertEquals(expected, rle.encode(input));
  }
});

await Deno.runTests;
