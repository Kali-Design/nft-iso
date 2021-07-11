const DepositNft = artifacts.require('DepositNft');

module.exports = async (deployer, accounts) => {
  await deployer.deploy(DepositNft, accounts[0], { from: accounts[0] });
};