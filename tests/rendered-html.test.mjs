import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const homepage = await readFile(
  new URL("../dist/client/index.html", import.meta.url),
  "utf8",
);

test("homepage describes the implemented display controls", () => {
  assert.match(homepage, /Disconnect and reconnect/);
  assert.match(homepage, /Control a display directly from the macOS menu bar/);
  assert.match(homepage, /Start at login/);
  assert.match(homepage, /Displays turned off by Display Toggle stay in the menu/);
});

test("homepage does not advertise an audio selection feature", () => {
  assert.doesNotMatch(homepage, /Audio output/);
  assert.doesNotMatch(homepage, /Choose the audio device/);
});

test("homepage does not list display inventory as a separate feature", () => {
  assert.doesNotMatch(homepage, /Display toggles/);
  assert.doesNotMatch(homepage, /Display list/);
  assert.doesNotMatch(homepage, /See each display and its resolution/);
});
