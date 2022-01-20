import web3 from './web3-instance'
import { AbiItem } from 'web3-utils'
import { LotteryContractAbi } from "./lottery-contract-abi"

export const lotteryContractAddress =
    "0xcD56B240B46b15670A78d2d4Cfcad2626f238BF0"

export const lotteryContractAbiObject = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"organizerAddress","type":"address"},{"indexed":false,"internalType":"string","name":"value","type":"string"}],"name":"InfoAddressAction","type":"event","signature":"0x4860a979207f9627f5143e066655de8cd6ba791950619a1f7f9731b33f431e5a"},{"inputs":[],"name":"canParticipate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xa7d257f6"},{"inputs":[],"name":"getAllParticipators","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x24540941"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x12065fe0"},{"inputs":[],"name":"getNumberOfParticipators","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8f117ea3"},{"inputs":[{"internalType":"uint104","name":"participatorNumber","type":"uint104"}],"name":"getParticipatorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x9c4c7aa4"},{"inputs":[],"name":"lotteryRoundNumber","outputs":[{"internalType":"int32","name":"","type":"int32"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x886e7225"},{"inputs":[],"name":"organizerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xc373ec8d"},{"inputs":[],"name":"participateLottery","outputs":[],"stateMutability":"payable","type":"function","payable":true,"signature":"0x8357f987"},{"inputs":[],"name":"pickWinner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function","signature":"0x5d495aea"}] as (AbiItem & { signature: string })[]

export const lotteryContract = new web3.eth.Contract(
  lotteryContractAbiObject,
  lotteryContractAddress
)

export const lotteryContractAbi = lotteryContract.methods as LotteryContractAbi