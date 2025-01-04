import { type Chain } from "viem";

export const lens: Chain = {
  id: 37111,
  name: "Lens Network Sepolia Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Lens",
    symbol: "GRASS",
  },
  rpcUrls: {
    default: { http: ["https://rpc.testnet.lens.dev"] },
  },
  blockExplorers: {
    default: { name: "SnowTrace", url: "https://block-explorer.testnet.lens.dev" },
  },
  testnet: true,
};