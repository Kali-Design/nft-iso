
const { accounts, contract } = require('@openzeppelin/test-environment');

const { time } = require('@openzeppelin/test-helpers');

const { expect } = require('chai');

const DepositNft = contract.fromArtifact('DepositNft');

Describe('NftIso', async function () {
  const [dev, creator] = accounts;
  const MESSAGE = 'WELCOME TO MY NFT';
  
  context('NftIso initial state', function () {
    // Execute this before each tests
    beforeEach(async function () {
      this.depositnft = await DepositNft.new(creator, MESSAGE, { from: dev });
    });

    it(`has message ${MESSAGE}`, async function () {
      expect(await this.depositnft.getMessage()).to.equal(MESSAGE);
    });

    it('has creator', async function () {
      expect(await this.depositnft.owner()).to.equal(creator);
    });

    it('has starting date', async function () {
      const _current = await time.latest();
      expect(await this.Depositnft.getStartDate()).to.be.a.bignumber.equal(_current);
    });

  });

}); 
