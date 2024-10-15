const wallets = [
  {
    coin: "ADA",
    wallet_address:
      "addr1qyhjty336xp8t9axhadh0furqhujfdtmfmlqmdg0d3m0m3s0zacn7rgqmv9zm6dhxhnsmfulp2duqwgc5ndtn5fqux6q2rnsxj",
    wallet_address_small:
      "addr1qyhjty336xp8t9axhadh0furqhuj fdtmfmlqmdg0d3m0m3s0zacn7rgqmv9zm6dhxhnsmfulp2duqwgc 5ndtn5fqux6q2rnsxj",
  },
  {
    coin: "ETH",
    wallet_address: "0xfE4B7280C94ceE152E0cce9C4df2902f6Ccff500",
    wallet_address_small: "0xfE4B7280C94ceE152E0cce 9C4df2902f6Ccff500",
  },
  {
    coin: "BTC",
    wallet_address: "bc1qvay6dluc97see5phac567pymuqp6swcpu0alxs",
    wallet_address_small: "bc1qvay6dluc97see5phac567 pymuqp6swcpu0alxs",
  },
  {
    coin: "BNB",
    wallet_address: "0xfE4B7280C94ceE152E0cce9C4df2902f6Ccff500",
    wallet_address_small: "0xfE4B7280C94ceE152E0cce9 C4df2902f6Ccff500",
  },
  {
    coin: "DODGE",
    wallet_address: "DBChypjJEAdFeyA3q9d1ekLchKuGyn4aw6",
    wallet_address_small: "DBChypjJEAdFeyA 3q9d1ekLchKuGyn4aw6",
  },
  {
    coin: "XRP",
    wallet_address: "rPCgfwgpA695KPu9fnV4ndWogtxxTeNYby",
    wallet_address_small: "rPCgfwgpA695KPu9fnV4 ndWogtxxTeNYby",
  },
  {
    coin: "LTC",
    wallet_address: "ltc1qet3kae7yelckkmm0nng63f0aj8fng5780yc4n3",
    wallet_address_small: "ltc1qet3kae7yelckkm m0nng63f0aj8fng5780yc4n3",
  },
  {
    coin: "TRC",
    wallet_address: "TCBEiwJPtmjimYQDfuUtbamMnG65GpQXrm",
    wallet_address_small: "TCBEiwJPtmjimYQDf uUtbamMnG65GpQXrm",
  },
  {
    coin: "SHIB",
    wallet_address: "0xfE4B7280C94ceE152E0cce9C4df2902f6Ccff500",
    wallet_address_small: "0xfE4B7280C94ceE152E0 cce9C4df2902f6Ccff500",
  },
  {
    coin: "MATIC",
    wallet_address: "0xfE4B7280C94ceE152E0cce9C4df2902f6Ccff500",
    wallet_address_small: "0xfE4B7280C94ceE152E0c ce9C4df2902f6Ccff500",
  },
  {
    coin: "FTM",
    wallet_address: "0xfE4B7280C94ceE152E0cce9C4df2902f6Ccff500",
    wallet_address_small: "0xfE4B7280C94ceE152E0c ce9C4df2902f6Ccff500",
  },
  {
    coin: "XLM",
    wallet_address: "GD56WJ4NWGF6AHQJMYO5SONI3GLWA2THITTC2VGAUNR4AUC47FPJXH3Z",
    wallet_address_small:
      "GD56WJ4NWGF6AHQJMYO5SONI3GLWA2THI TTC2VGAUNR4AUC47FPJXH3Z",
  },
  {
    coin: "ALGO",
    wallet_address:
      "TL2KDIPWEIVUXTFHDP2RGNAB23RLQ4LPT4MR2N7DL3UMIOOCWNQUYTVFZ4",
    wallet_address_small:
      "TL2KDIPWEIVUXTFHDP2RGNAB23RL Q4LPT4MR2N7DL3UMIOOCWNQUYTVFZ4",
  },
  {
    coin: "SOL",
    wallet_address: "Dse7MgopoghJc3GsMf1GSNtPrpyXToErdAXoVqpgaUD8",
    wallet_address_small: "Dse7MgopoghJc3GsMf1GSNt PrpyXToErdAXoVqpgaUD8",
  },
  {
    coin: "Luna",
    wallet_address: "terra1r6ls0wdfchx9mqkn3f4x2vzqdcm5djvycur5uq",
    wallet_address_small: "terra1r6ls0wdfchx9mqkn3 f4x2vzqdcm5djvycur5uq",
  },
  {
    coin: "Luna",
    wallet_address: "xdc393a7b8396c5dc9fc05e3eac3beedc4ef4a1afb0",
    wallet_address_small: "xdc393a7b8396c5dc9fc05 e3eac3beedc4ef4a1afb0",
  },
  {
    coin: "PEPE",
    wallet_address: "0xfE4B7280C94ceE152E0cce9C4df2902f6Ccff500",
    wallet_address_small: "0xfE4B7280C94ceE152E0 cce9C4df2902f6Ccff500",
  },
  {
    coin: "LUNC",
    wallet_address: "terra1cr6kl9j2aztvq04nk6dukfs868qqu7n3d63uey",
    wallet_address_small: "terra1cr6kl9j2aztvq04nk6 dukfs868qqu7n3d63uey",
  },
  {
    coin: "SUI",
    wallet_address:
      "0x46cd9ef5017a825b66a2463b6db3cf2c402062adb91211ff29b7e6c3a367ac3",
    wallet_address_small:
      "0x46cd9ef5017a825b66a2463b6db3cf2c 402062adb91211ff29b7e6c3a367ac3",
  },
  {
    coin: "HBAR",
    wallet_address: "0.0.7294837",
    wallet_address_small: "0.0.7294837",
  },
  {
    coin : 'XDC',
    wallet_address : 'xdc393a7b8396c5dc9fc05e3eac3beedc4ef4a1afb0',
    wallet_address_small: "xdc393a7b8396c5dc9fc0 5e3eac3beedc4ef4a1afb0",
  }
];

export const getWallet = (opened: string) => {
  const coinIndex = wallets.findIndex((res) => {
    return res.coin == opened;
  });
  console.log(coinIndex, opened);
  if (coinIndex != -1) {
    return {
      big: wallets[coinIndex].wallet_address,
      small: wallets[coinIndex].wallet_address_small,
    };
  } else {
    return {
      big: wallets[2].wallet_address,
      small: wallets[2].wallet_address_small,
    };
  }
};
