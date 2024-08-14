import { Contract } from 'ethers';
import provider from '../config/etherProvider';
import QuestBoardAbi from '../data/abi/QuestBoardAbi.json';
import { ChainIds } from '../globals/chainIds';

enum VoteType {
  NORMAL,
  BLACKLIST,
  WHITELIST,
}

enum RewardsType {
  FIXED,
  RANGE,
}

enum CloseType {
  NORMAL,
  ROLLOVER,
  DISTRIBUTE,
}

type QuestTypes = {
  voteType: VoteType;
  rewardsType: RewardsType;
  closeType: CloseType;
};

type QuestPeriod = {
  // Address of the Quest creator (caller of createQuest() method)
  creator: string;
  // Address of the ERC20 used for rewards
  rewardToken: string;
  // Address of the target Gauge
  gauge: string;
  // Total number of periods for the Quest
  duration: bigint;
  // Timestamp where the 1st QuestPeriod starts
  periodStart: bigint;
  // Total amount of rewards paid for this Quest
  // If changes were made to the parameters of this Quest, this will account
  // any added reward amounts
  totalRewardAmount: bigint;
  // Total reward amount that can be distributed for each period
  rewardAmountPerPeriod: bigint;
  // Min Amount of reward for each vote (for 1 veToken)
  minRewardPerVote: bigint;
  // Max Amount of reward for each vote (for 1 veToken)
  maxRewardPerVote: bigint;
  // Min Target Bias for the Gauge
  minObjectiveVotes: bigint;
  // Max Target Bias for the Gauge
  maxObjectiveVotes: bigint;
  // Quest Types
  types: QuestTypes;
};

const getQuest = async (
  questBoard: string,
  questId: bigint,
  chainId: ChainIds,
): Promise<QuestPeriod> => {
  const contract = new Contract(questBoard, QuestBoardAbi, provider[chainId]);
  const quest = await contract.quests(questId);
  return quest;
};

export { getQuest, QuestPeriod, QuestTypes, VoteType, RewardsType, CloseType };
