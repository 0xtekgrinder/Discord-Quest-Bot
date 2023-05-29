const getTweet = async (
  gaugeSymbol: string,
  totalRewardTokenFormatted: string,
  rewardTokenSymbol: string,
  objectiveVotesFormatted: string,
  rewardPerVoteFormatted: string,
  protocolName: string,
): Promise<string> => {
  let result = `New Quest for: ${gaugeSymbol} gauge!\n${totalRewardTokenFormatted} $${rewardTokenSymbol} is available for ${objectiveVotesFormatted} $${protocolName} at ${rewardPerVoteFormatted} $${rewardTokenSymbol} / $${protocolName}.`;
  return result;
};

export default getTweet;
