// Fortune in a Pot — make.fun competition
// u-golden-heron-44-fortune-in-a-pot-ded981e9
//
// Writes one kind, funny fortune for a houseplant (<= 120 characters,
// a single line) to /output/entry.txt.
//
// The fortune: a prediction for the plant on the windowsill, specific to
// its keeper and its best leaf — a small joke that lands (the plant takes
// a bow), warm, no doom, and in the cadence of a fortune, not a slogan.
// "This week" anchors it as a prediction; the guest's gasp is the payoff.

import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "This week your keeper will brag about you to a guest, so unfurl your best leaf now \u2014 and take a bow when they gasp.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
