const alphabetSequenceIndex = require("./alphabetSequenceIndex");

test("alphabetSequenceIndex And the LORD spake unto Moses, saying,", () => {
  expect(alphabetSequenceIndex("And the LORD spake unto Moses, saying,")).toBe(369);
});
