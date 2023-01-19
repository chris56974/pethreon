/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Pethreon, PethreonInterface } from "../Pethreon";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_period",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "ContributorDeposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "period",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "contributor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ContributorWithdrew",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "period",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "creatorAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "CreatorWithdrew",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "period",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "creatorAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "contributor",
        type: "address",
      },
    ],
    name: "PledgeCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "period",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "creatorAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "contributor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weiPerPeriod",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "periods",
        type: "uint256",
      },
    ],
    name: "PledgeCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_creatorAddress",
        type: "address",
      },
    ],
    name: "cancelPledge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "contributorWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_creatorAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_weiPerPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_periods",
        type: "uint256",
      },
    ],
    name: "createPledge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "creatorWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "currentPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "periodNumber",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getContributorBalanceInWei",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getContributorPledges",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "creatorAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "contributorAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "weiPerPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "duration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dateCreated",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "periodExpires",
            type: "uint256",
          },
          {
            internalType: "enum Pethreon.Status",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct Pethreon.Pledge[]",
        name: "allPledges",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCreatorBalanceInWei",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCreatorPledges",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "creatorAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "contributorAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "weiPerPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "duration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dateCreated",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "periodExpires",
            type: "uint256",
          },
          {
            internalType: "enum Pethreon.Status",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct Pethreon.Pledge[]",
        name: "allPledges",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getExpiredPledges",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "creatorAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "contributorAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "weiPerPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "duration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dateCreated",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "periodExpires",
            type: "uint256",
          },
          {
            internalType: "enum Pethreon.Status",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct Pethreon.Pledge[]",
        name: "allPledges",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "startOfEpoch",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620030103803806200301083398181016040528101906200003791906200008c565b426001819055508060008190555050620000be565b600080fd5b6000819050919050565b620000668162000051565b81146200007257600080fd5b50565b60008151905062000086816200005b565b92915050565b600060208284031215620000a557620000a46200004c565b5b6000620000b58482850162000075565b91505092915050565b612f4280620000ce6000396000f3fe6080604052600436106100a75760003560e01c806364ec8bdb1161006457806364ec8bdb146101be5780638197a398146101e95780638b104d8214610214578063aa60145b1461023f578063d0e30db014610268578063ff8e08d514610286576100a7565b8063018aba3f146100ac57806306040618146100d557806339d78d23146101005780633f64c1ab1461013d5780634aef815214610168578063616934db14610193575b600080fd5b3480156100b857600080fd5b506100d360048036038101906100ce9190612641565b6102b1565b005b3480156100e157600080fd5b506100ea610bef565b6040516100f791906126a3565b60405180910390f35b34801561010c57600080fd5b50610127600480360381019061012291906126be565b610c10565b60405161013491906126a3565b60405180910390f35b34801561014957600080fd5b50610152610e20565b60405161015f91906126a3565b60405180910390f35b34801561017457600080fd5b5061017d610e26565b60405161018a91906126a3565b60405180910390f35b34801561019f57600080fd5b506101a8610efa565b6040516101b591906126a3565b60405180910390f35b3480156101ca57600080fd5b506101d3610f41565b6040516101e091906126a3565b60405180910390f35b3480156101f557600080fd5b506101fe6110d2565b60405161020b91906128bd565b60405180910390f35b34801561022057600080fd5b5061022961127d565b60405161023691906128bd565b60405180910390f35b34801561024b57600080fd5b50610266600480360381019061026191906128df565b611428565b005b61027061172f565b60405161027d91906126a3565b60405180910390f35b34801561029257600080fd5b5061029b61187a565b6040516102a891906128bd565b60405180910390f35b80826102bd919061293b565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561033e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610335906129da565b60405180910390fd5b808261034a919061293b565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461039891906129fa565b925050819055506000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b8282101561054157838290600052602060002090600702016040518060e00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820154815260200160048201548152602001600582015481526020016006820160009054906101000a900460ff16600281111561051c5761051b612735565b5b600281111561052e5761052d612735565b5b8152505081526020019060010190610400565b50505050905060005b81518110156107d6578473ffffffffffffffffffffffffffffffffffffffff1682828151811061057d5761057c612a2e565b5b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff16036107c3578181815181106105b7576105b6612a2e565b5b602002602001015160a001516105cb610bef565b101561060c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060390612b1b565b60405180910390fd5b600082828151811061062157610620612a2e565b5b6020026020010151905060028160c00190600281111561064457610643612735565b5b9081600281111561065857610657612735565b5b81525050600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081908060018154018082558091505060019003906000526020600020906007020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301556080820151816004015560a0820151816005015560c08201518160060160006101000a81548160ff021916908360028111156107a6576107a5612735565b5b021790555050506107b686611a25565b506107c086611fa9565b50505b80806107ce90612b3b565b91505061054a565b5060006107e1610bef565b905060008190505b83826107f59190612b83565b8110156108765784600760008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000838152602001908152602001600020600082825461085c9190612b83565b92505081905550808061086e90612b3b565b9150506107e9565b5060006040518060e001604052808773ffffffffffffffffffffffffffffffffffffffff1681526020013373ffffffffffffffffffffffffffffffffffffffff168152602001868152602001858152602001428152602001856108d7610bef565b6108e19190612b83565b8152602001600060028111156108fa576108f9612735565b5b8152509050600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081908060018154018082558091505060019003906000526020600020906007020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301556080820151816004015560a0820151816005015560c08201518160060160006101000a81548160ff02191690836002811115610a4957610a48612735565b5b02179055505050600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081908060018154018082558091505060019003906000526020600020906007020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301556080820151816004015560a0820151816005015560c08201518160060160006101000a81548160ff02191690836002811115610b9a57610b99612735565b5b021790555050507f8e09f18192ecfb9b3f5f9d5e64a99285daf66bbd42f237261ef72fa03590b2cd610bca610bef565b87338888604051610bdf959493929190612bc6565b60405180910390a1505050505050565b6000805460015442610c0191906129fa565b610c0b9190612c48565b905090565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115610c94576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c8b906129da565b60405180910390fd5b81600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ce391906129fa565b9250508190555060003373ffffffffffffffffffffffffffffffffffffffff1683604051610d1090612caa565b60006040518083038185875af1925050503d8060008114610d4d576040519150601f19603f3d011682016040523d82523d6000602084013e610d52565b606091505b5050905080610d96576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d8d90612d0b565b60405180910390fd5b7fe91b2e1970531db1e757470f91918e5ae187999ac2ea50e4e37466d8c2f04095610dbf610bef565b3385604051610dd093929190612d2b565b60405180910390a1600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054915050919050565b60015481565b600080600090506000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490505b610e7a610bef565b811015610ef257600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008281526020019081526020016000205482610edd9190612b83565b91508080610eea90612b3b565b915050610e72565b508091505090565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b600080610f4c610e26565b9050610f56610bef565b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060008111610fdc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fd390612dae565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff168260405161100290612caa565b60006040518083038185875af1925050503d806000811461103f576040519150601f19603f3d011682016040523d82523d6000602084013e611044565b606091505b5050905080611088576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161107f90612e1a565b60405180910390fd5b7ff2f5ee55e951acd7f51568e21f2f82e8b2b809ead086416336d5921757ab8e5a6110b1610bef565b33846040516110c293929190612d2b565b60405180910390a1819250505090565b6060600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b8282101561127457838290600052602060002090600702016040518060e00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820154815260200160048201548152602001600582015481526020016006820160009054906101000a900460ff16600281111561124f5761124e612735565b5b600281111561126157611260612735565b5b8152505081526020019060010190611133565b50505050905090565b6060600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b8282101561141f57838290600052602060002090600702016040518060e00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820154815260200160048201548152602001600582015481526020016006820160009054906101000a900460ff1660028111156113fa576113f9612735565b5b600281111561140c5761140b612735565b5b81525050815260200190600101906112de565b50505050905090565b600061143382611a25565b9050600061143f610bef565b90505b8160a001518110156114cc578160400151600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060008282546114b291906129fa565b9250508190555080806114c490612b3b565b915050611442565b5060006114d883611fa9565b90506114e2610bef565b8160a001818152505060018160c00190600281111561150457611503612735565b5b9081600281111561151857611517612735565b5b81525050600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081908060018154018082558091505060019003906000526020600020906007020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301556080820151816004015560a0820151816005015560c08201518160060160006101000a81548160ff0219169083600281111561166657611665612735565b5b02179055505050611675610bef565b8260a0015161168491906129fa565b8260400151611693919061293b565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546116e19190612b83565b925050819055507f0e5d37f92c75ec89c26e8d6cc3efe3b5e5a199bd47e0b37e82abb2a9f4e12373611711610bef565b843360405161172293929190612e3a565b60405180910390a1505050565b6000803411611773576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161176a90612ebd565b60405180910390fd5b34600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546117c29190612b83565b92505081905550600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020547f4aa7ebf3f5c3698feb7797ad5d6536b30af888e149a0adad39968e25a06b220860405160405180910390a2600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b6060600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b82821015611a1c57838290600052602060002090600702016040518060e00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820154815260200160048201548152602001600582015481526020016006820160009054906101000a900460ff1660028111156119f7576119f6612735565b5b6002811115611a0957611a08612735565b5b81525050815260200190600101906118db565b50505050905090565b611a2d61252d565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050611a7861252d565b60005b8280549050811015611ef2578473ffffffffffffffffffffffffffffffffffffffff16838281548110611ab157611ab0612a2e565b5b906000526020600020906007020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603611edf57828181548110611b1157611b10612a2e565b5b90600052602060002090600702016040518060e00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820154815260200160048201548152602001600582015481526020016006820160009054906101000a900460ff166002811115611c2357611c22612735565b5b6002811115611c3557611c34612735565b5b8152505091508260018480549050611c4d91906129fa565b81548110611c5e57611c5d612a2e565b5b9060005260206000209060070201838281548110611c7f57611c7e612a2e565b5b90600052602060002090600702016000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600282015481600201556003820154816003015560048201548160040155600582015481600501556006820160009054906101000a900460ff168160060160006101000a81548160ff02191690836002811115611dbb57611dba612735565b5b0217905550905050818360018580549050611dd691906129fa565b81548110611de757611de6612a2e565b5b906000526020600020906007020160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301556080820151816004015560a0820151816005015560c08201518160060160006101000a81548160ff02191690836002811115611ed657611ed5612735565b5b02179055509050505b8080611eea90612b3b565b915050611a7b565b5081805480611f0457611f03612edd565b5b6001900381819060005260206000209060070201600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560028201600090556003820160009055600482016000905560058201600090556006820160006101000a81549060ff0219169055505090558092505050919050565b611fb161252d565b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050611ffc61252d565b60005b8280549050811015612476573373ffffffffffffffffffffffffffffffffffffffff1683828154811061203557612034612a2e565b5b906000526020600020906007020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036124635782818154811061209557612094612a2e565b5b90600052602060002090600702016040518060e00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820154815260200160048201548152602001600582015481526020016006820160009054906101000a900460ff1660028111156121a7576121a6612735565b5b60028111156121b9576121b8612735565b5b81525050915082600184805490506121d191906129fa565b815481106121e2576121e1612a2e565b5b906000526020600020906007020183828154811061220357612202612a2e565b5b90600052602060002090600702016000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600282015481600201556003820154816003015560048201548160040155600582015481600501556006820160009054906101000a900460ff168160060160006101000a81548160ff0219169083600281111561233f5761233e612735565b5b021790555090505081836001858054905061235a91906129fa565b8154811061236b5761236a612a2e565b5b906000526020600020906007020160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301556080820151816004015560a0820151816005015560c08201518160060160006101000a81548160ff0219169083600281111561245a57612459612735565b5b02179055509050505b808061246e90612b3b565b915050611fff565b508180548061248857612487612edd565b5b6001900381819060005260206000209060070201600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560028201600090556003820160009055600482016000905560058201600090556006820160006101000a81549060ff0219169055505090558092505050919050565b6040518060e00160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081526020016000815260200160008152602001600060028111156125a2576125a1612735565b5b81525090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006125d8826125ad565b9050919050565b6125e8816125cd565b81146125f357600080fd5b50565b600081359050612605816125df565b92915050565b6000819050919050565b61261e8161260b565b811461262957600080fd5b50565b60008135905061263b81612615565b92915050565b60008060006060848603121561265a576126596125a8565b5b6000612668868287016125f6565b93505060206126798682870161262c565b925050604061268a8682870161262c565b9150509250925092565b61269d8161260b565b82525050565b60006020820190506126b86000830184612694565b92915050565b6000602082840312156126d4576126d36125a8565b5b60006126e28482850161262c565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b612720816125cd565b82525050565b61272f8161260b565b82525050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6003811061277557612774612735565b5b50565b600081905061278682612764565b919050565b600061279682612778565b9050919050565b6127a68161278b565b82525050565b60e0820160008201516127c26000850182612717565b5060208201516127d56020850182612717565b5060408201516127e86040850182612726565b5060608201516127fb6060850182612726565b50608082015161280e6080850182612726565b5060a082015161282160a0850182612726565b5060c082015161283460c085018261279d565b50505050565b600061284683836127ac565b60e08301905092915050565b6000602082019050919050565b600061286a826126eb565b61287481856126f6565b935061287f83612707565b8060005b838110156128b0578151612897888261283a565b97506128a283612852565b925050600181019050612883565b5085935050505092915050565b600060208201905081810360008301526128d7818461285f565b905092915050565b6000602082840312156128f5576128f46125a8565b5b6000612903848285016125f6565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006129468261260b565b91506129518361260b565b925082820261295f8161260b565b915082820484148315176129765761297561290c565b5b5092915050565b600082825260208201905092915050565b7f496e73756666696369656e742066756e64730000000000000000000000000000600082015250565b60006129c460128361297d565b91506129cf8261298e565b602082019050919050565b600060208201905081810360008301526129f3816129b7565b9050919050565b6000612a058261260b565b9150612a108361260b565b9250828203905081811115612a2857612a2761290c565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f596f75277265206f6e6c7920616c6c6f77656420746f2068617665206f6e652060008201527f61637469766520706c656467652061742061742074696d652c2063616e63656c60208201527f20796f7572206578697374696e67206f6e65206669727374206f72207761697460408201527f20756e74696c2069742065787069726573000000000000000000000000000000606082015250565b6000612b0560718361297d565b9150612b1082612a5d565b608082019050919050565b60006020820190508181036000830152612b3481612af8565b9050919050565b6000612b468261260b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612b7857612b7761290c565b5b600182019050919050565b6000612b8e8261260b565b9150612b998361260b565b9250828201905080821115612bb157612bb061290c565b5b92915050565b612bc0816125cd565b82525050565b600060a082019050612bdb6000830188612694565b612be86020830187612bb7565b612bf56040830186612bb7565b612c026060830185612694565b612c0f6080830184612694565b9695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000612c538261260b565b9150612c5e8361260b565b925082612c6e57612c6d612c19565b5b828204905092915050565b600081905092915050565b50565b6000612c94600083612c79565b9150612c9f82612c84565b600082019050919050565b6000612cb582612c87565b9150819050919050565b7f5769746864726177616c206661696c6564000000000000000000000000000000600082015250565b6000612cf560118361297d565b9150612d0082612cbf565b602082019050919050565b60006020820190508181036000830152612d2481612ce8565b9050919050565b6000606082019050612d406000830186612694565b612d4d6020830185612bb7565b612d5a6040830184612694565b949350505050565b7f4e6f7468696e6720746f20776974686472617700000000000000000000000000600082015250565b6000612d9860138361297d565b9150612da382612d62565b602082019050919050565b60006020820190508181036000830152612dc781612d8b565b9050919050565b7f7769746864726177616c206661696c6564000000000000000000000000000000600082015250565b6000612e0460118361297d565b9150612e0f82612dce565b602082019050919050565b60006020820190508181036000830152612e3381612df7565b9050919050565b6000606082019050612e4f6000830186612694565b612e5c6020830185612bb7565b612e696040830184612bb7565b949350505050565b7f43616e2774206465706f73697420300000000000000000000000000000000000600082015250565b6000612ea7600f8361297d565b9150612eb282612e71565b602082019050919050565b60006020820190508181036000830152612ed681612e9a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea2646970667358221220d884affc8fe41a63da1cd06057ef30eaf00feefbbcf7f0aa34180e1d8b8bca5a64736f6c63430008110033";

type PethreonConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PethreonConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Pethreon__factory extends ContractFactory {
  constructor(...args: PethreonConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _period: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Pethreon> {
    return super.deploy(_period, overrides || {}) as Promise<Pethreon>;
  }
  override getDeployTransaction(
    _period: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_period, overrides || {});
  }
  override attach(address: string): Pethreon {
    return super.attach(address) as Pethreon;
  }
  override connect(signer: Signer): Pethreon__factory {
    return super.connect(signer) as Pethreon__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PethreonInterface {
    return new utils.Interface(_abi) as PethreonInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Pethreon {
    return new Contract(address, _abi, signerOrProvider) as Pethreon;
  }
}
