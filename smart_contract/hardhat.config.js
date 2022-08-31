require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/-v0K7-BICANy9NPIvnqAuVNqY7Q8lyzo",
      accounts: [
        "a66184b4facfe02898123c4c516cccdd890ee562e69f2c46052994e3416f05b1",
      ],
    },
  },
};

//https://eth-goerli.g.alchemy.com/v2/-v0K7-BICANy9NPIvnqAuVNqY7Q8lyzo
