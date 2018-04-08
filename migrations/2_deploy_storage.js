const ItemTokens = artifacts.require('./ItemTokens.sol')

module.exports = async function (deployer, network, accounts) {
  deployer.deploy(ItemTokens)
}
