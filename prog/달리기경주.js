function solution(players, callings) {
  const playerIndices = new Map(players.map((player, index) => [player, index]));

  callings.forEach(name => {
    const playerIndex = playerIndices.get(name);
    if (playerIndex > 0) {
      const prevPlayer = players[playerIndex - 1];
      players[playerIndex - 1] = name;
      players[playerIndex] = prevPlayer;

      playerIndices.set(name, playerIndex - 1);
      playerIndices.set(prevPlayer, playerIndex);
    }
  });

  return playerIndices;
}
