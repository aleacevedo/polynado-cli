require('dotenv').config()

module.exports = {
  deployments: {
    netId137: {
      matic: {
        instanceAddress: {
          '10': '0xD65887D53B3580Fd0Cdd75c8a8DCC8dF1F33A92d',
          '100': '0xf60aFdBb2c0B5723BfFBdbcD600292C1A3119350',
          '1000': '0xD449dFFEfB94b1f5d0991a878892338312C087d6',
          '10000': '0xa35D5063F4d0308ED249cDa7cB799e887db149a1',
          '100000': '0xb6e723dc793171e355420e2807083714BEc58dD4'
        },
        symbol: 'MATIC',
        decimals: 18
      },
      usdc: {
        instanceAddress: {
          '100': '0xC3021CAb29cFe271d814dD1D6BF043E112DD195c',
          '1000': '0x18E6f80B2AAaAcA29f327F9648ae3770f180A2C0',
          '10000': '0xA7CAa08CD5437675567B9aaA5157A8ac8821e67c',
          '100000': '0x7e3E2585D027718325cE546ED3f1884537D2662'
        },
        tokenAddress: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
        symbol: 'USDC',
        decimals: 6
      },
      dai: {
        instanceAddress: {
          '100': '0x49e2359ddF3236A47319c2F9c5A09EBA347fde16',
          '1000': '0x2afe450BC0a4f7364E2E8E002E10e67a7231896D',
          '10000': '0x0700d9e3040c338d1BDc1918fFE9DF2964DB0924',
          '100000': '0xd5306A56d6c726F8F626F4C5692792f8a830813A'
        },
        tokenAddress: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
        symbol: 'DAI',
        decimals: 18
      },
      usdt: {
        instanceAddress: {
          '100': '0x5720608A86234338c58a9DCce0bd3eA70dCB13cC',
          '1000': '0x94c5c0690837934B02A0A594836FaBb8D76cc608',
          '10000': '0x4f658dDDd5E08fFbAE253d24e29Bfa3D08741c7D',
          '100000': '0x0b824A7480eC65abEa3211e018cc874582235FB8'
        },
        tokenAddress: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
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
