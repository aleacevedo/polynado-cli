
### Mumbai, Mainnet
1. Add `PRIVATE_KEY` to `.env` file
2. `./cli.js --help`

Example:
```bash
./node cli.js deposit MATIC 0.1 --rpc https://polygon-mumbai.infura.io/v3/{your_APY_KEY}
```
> Your note: polynado-matic-0.1-80001-0x4af939d95f65ff85b70e065068ac6601c91178bf9a1f6aef09935bc9045743430e8203f8ff2d948de5e0320d70b4a133bb3e160e0237c7e3ffb798088614
> Polynado MATIC balance is 0.2
> Sender account MATIC balance is 0.1941545475
> Submitting deposit transaction
> Polynado MATIC balance is 0.3
> Sender account MATIC balance is 0.0891103175
> Deposit successful.

```bash
./cli.js withdraw polynado-matic-0.1-80001-0x4af939d95f65ff85b70e065068ac6601c91178bf9a1f6aef09935bc9045743430e8203f8ff2d948de5e0320d70b4a133bb3e160e0237c7e3ffb798088614 0x67D5A2d8B695f282A7EDAd122f1e4fC2c6998B36 --rpc https://polygon-mumbai.infura.io/v3/{your_APY_KEY}
```

> Getting current state from polynado contract
> Generating SNARK proof
> Proof time: 8070.604ms
> Submitting withdraw transaction
> View transaction on maticvigil https://explorer-mumbai.maticvigil.com/tx/0xfb00d0ef91cfcebd288e81926214ba9f58dc3ed14bcf5699c0eda07d8a1f7ea7
> Done
