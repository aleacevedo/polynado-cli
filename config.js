require('dotenv').config()

module.exports = {
  deployments: {
    netId137: {
      matic: {
        instanceAddress: {
          '0.1': undefined,
          '1': undefined,
          '10': undefined,
          '100': undefined,
        },
        symbol: 'MATIC',
        decimals: 18
      },
      dai: {
        instanceAddress: {
          '100': undefined,
          '1000': undefined,
          '10000': undefined,
          '100000': undefined
        },
        tokenAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
        symbol: 'DAI',
        decimals: 18
      },
      cdai: {
        instanceAddress: {
          '5000': undefined,
          '50000': undefined,
          '500000': undefined,
          '5000000': undefined
        },
        tokenAddress: '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643',
        symbol: 'cDAI',
        decimals: 8
      },
      usdc: {
        instanceAddress: {
          '100': undefined,
          '1000': undefined,
          '10000': undefined,
          '100000': undefined
        },
        tokenAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        symbol: 'USDC',
        decimals: 6
      },
      cusdc: {
        instanceAddress: {
          '5000': undefined,
          '50000': undefined,
          '500000': undefined,
          '5000000': undefined
        },
        tokenAddress: '0x39AA39c021dfbaE8faC545936693aC917d5E7563',
        symbol: 'cUSDC',
        decimals: 8
      },
      usdt: {
        instanceAddress: {
          '100': undefined,
          '1000': undefined,
          '10000': undefined,
          '100000': undefined,
        },
        tokenAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        symbol: 'USDT',
        decimals: 6
      }
    },
    netId80001: {
      matic: {
        instanceAddress: {
          '0.1': '0xA7D35Ba58D78E9f8B85c74c82b71D9026Ab3624a',
          '1': undefined,
          '10': undefined,
          '100': undefined
        },
        symbol: 'MATIC',
        decimals: 18
      },
      tusdc: {
        instanceAddress: {
          '10': "0xfEaDAD03D1547FB5bd980A8C823e38f5F1776E6d",
          '100': "0xF3a8e4CDCC8De8686cDe0d6f47ECF70CC102af15",
          '1000': "0xcE4772bB0b57D50a4D238F35Bc2A9540C4F52c8d",
          '10000': "0x8055D62afdee4f88Dce2d653f7F34c79BD2575D0",
          '100000': "0x831Ba5B24A58Ef4550D4F7EFb47b88592E700Bd4"
        },
        tokenAddress: '0x88fe430Ec0C22962053bc47657C4A11787ff6A51',
        symbol: 'TUSDC',
        decimals: 18
      }
    }
  }
}
