const dice = 3;
const sides = 6;
const query = `query RollDice($dice: Int!, $sides: Int){
    rollDice(numDice: $dice, numSides: $sides)
}`;

fetch("/gql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    query,
    variables: { dice, sides },
  }),
})
  .then((r) => r.json())
  .then((data) => console.log("data returned:", data));
