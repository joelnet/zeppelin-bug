# zeppelin-solidity ERC721 bug

## 1.6.0 works fine

```bash
npm checkout 1.6.0

npm install

rm -rf build

truffle migrate --reset
```

```
Compiling ./contracts/ItemTokens.sol...
Compiling ./contracts/Migrations.sol...
Compiling zeppelin-solidity/contracts/math/SafeMath.sol...
Compiling zeppelin-solidity/contracts/token/ERC721/ERC721.sol...
Compiling zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol...

Compilation warnings encountered:

zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol:102:7: Warning: Invoking events without "emit" prefix is deprecated.
      Approval(owner, _to, _tokenId);
      ^----------------------------^
,zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol:123:5: Warning: Invoking events without "emit" prefix is deprecated.
    Transfer(0x0, _to, _tokenId);
    ^--------------------------^
,zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol:135:5: Warning: Invoking events without "emit" prefix is deprecated.
    Transfer(msg.sender, 0x0, _tokenId);
    ^---------------------------------^
,zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol:163:5: Warning: Invoking events without "emit" prefix is deprecated.
    Transfer(_from, _to, _tokenId);
    ^----------------------------^
,zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol:173:5: Warning: Invoking events without "emit" prefix is deprecated.
    Approval(_owner, 0, _tokenId);
    ^---------------------------^

Writing artifacts to ./build/contracts

Using network 'development'.

Running migration: 1_initial_migration.js
  Deploying Migrations...
  ... 0xfeb9205ad8a8bff46915e50db8f878addbf1a57dfc7ab843fd14c069ef4d0a58
  Migrations: 0x5361c0c23de9ee60117455787a8408d6313b9963
Saving successful migration to network...
  ... 0x8c9dc46acb24ea81fa587573edcb914b4b0c35655f82cd1f8d46ad98f4bb5df6
Saving artifacts...
Running migration: 2_deploy_storage.js
  Deploying ItemTokens...
  ... 0x7a30a20e5226e482e3fd7513906c9be1abad389266fa43f229166d7c1bbdaa3c
  ItemTokens: 0x3b7d53b672aa74cdf08f13740b3fad2ac26f50a2
Saving successful migration to network...
  ... 0xac7adfdeea2d20fcb30adc9cbfd3e17fb9c7a7f31998dc5981451eab670828a5
Saving artifacts...
```

## 1.7.0 also works

```bash
npm checkout 1.7.0

npm install

rm -rf build

truffle migrate --reset
```

```
Compiling ./contracts/ItemTokens.sol...
Compiling ./contracts/Migrations.sol...
Compiling zeppelin-solidity/contracts/math/SafeMath.sol...
Compiling zeppelin-solidity/contracts/token/ERC721/ERC721.sol...
Compiling zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol...

Compilation warnings encountered:

zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol:102:7: Warning: Invoking events without "emit" prefix is deprecated.
      Approval(owner, _to, _tokenId);
      ^----------------------------^
,zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol:123:5: Warning: Invoking events without "emit" prefix is deprecated.
    Transfer(0x0, _to, _tokenId);
    ^--------------------------^
,zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol:135:5: Warning: Invoking events without "emit" prefix is deprecated.
    Transfer(msg.sender, 0x0, _tokenId);
    ^---------------------------------^
,zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol:163:5: Warning: Invoking events without "emit" prefix is deprecated.
    Transfer(_from, _to, _tokenId);
    ^----------------------------^
,zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol:173:5: Warning: Invoking events without "emit" prefix is deprecated.
    Approval(_owner, 0, _tokenId);
    ^---------------------------^

Writing artifacts to ./build/contracts

Using network 'development'.

Running migration: 1_initial_migration.js
  Deploying Migrations...
  ... 0xc34a9cbc074afce7ebe8264fe801ac3c7476e75b407819f8b21776284229c293
  Migrations: 0x7bfefd97ee2e292ffbfd3348c54e107806eec1de
Saving successful migration to network...
  ... 0x95ca95ebe9eaba0f8ff4afb62128c5c78edbfa5817191d2709e342ed1b359885
Saving artifacts...
Running migration: 2_deploy_storage.js
  Deploying ItemTokens...
  ... 0xb17351ce41a6b6b8ec770763b39c6f29926bbd97fe9799e3d06eaf8d09ee16eb
  ItemTokens: 0x9c40147dac42e61a81646fd50af712ab65335304
Saving successful migration to network...
  ... 0x4f5465fa4730ff8169f52e4d44e9b1ea20b59a5635a71703825df96024bf149d
Saving artifacts...
```

## 1.8.0 fails

```bash
npm checkout 1.8.0

npm install

rm -rf build

truffle migrate --reset
```

```
Compiling ./contracts/ItemTokens.sol...
Compiling ./contracts/Migrations.sol...
Compiling zeppelin-solidity/contracts/AddressUtils.sol...
Compiling zeppelin-solidity/contracts/math/SafeMath.sol...
Compiling zeppelin-solidity/contracts/token/ERC721/DeprecatedERC721.sol...
Compiling zeppelin-solidity/contracts/token/ERC721/ERC721.sol...
Compiling zeppelin-solidity/contracts/token/ERC721/ERC721Basic.sol...
Compiling zeppelin-solidity/contracts/token/ERC721/ERC721BasicToken.sol...
Compiling zeppelin-solidity/contracts/token/ERC721/ERC721Receiver.sol...
Compiling zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol...

Compilation warnings encountered:

zeppelin-solidity/contracts/token/ERC721/ERC721BasicToken.sol:96:7: Warning: Invoking events without "emit" prefix is deprecated.
      Approval(owner, _to, _tokenId);
      ^----------------------------^
,zeppelin-solidity/contracts/token/ERC721/ERC721BasicToken.sol:119:5: Warning: Invoking events without "emit" prefix is deprecated.
    ApprovalForAll(msg.sender, _to, _approved);
    ^----------------------------------------^
,zeppelin-solidity/contracts/token/ERC721/ERC721BasicToken.sol:148:5: Warning: Invoking events without "emit" prefix is deprecated.
    Transfer(_from, _to, _tokenId);
    ^----------------------------^
,zeppelin-solidity/contracts/token/ERC721/ERC721BasicToken.sol:204:5: Warning: Invoking events without "emit" prefix is deprecated.
    Transfer(address(0), _to, _tokenId);
    ^---------------------------------^
,zeppelin-solidity/contracts/token/ERC721/ERC721BasicToken.sol:215:5: Warning: Invoking events without "emit" prefix is deprecated.
    Transfer(_owner, address(0), _tokenId);
    ^------------------------------------^
,zeppelin-solidity/contracts/token/ERC721/ERC721BasicToken.sol:228:7: Warning: Invoking events without "emit" prefix is deprecated.
      Approval(_owner, address(0), _tokenId);
      ^------------------------------------^

Writing artifacts to ./build/contracts

Using network 'development'.

Running migration: 1_initial_migration.js
  Deploying Migrations...
  ... 0x4bb16705fb56dc69b092179ab250342ae5012a6b8322eb0db9a2dce2c3c980a1
  Migrations: 0x59b5228936a07fe9aa422da1524f7ff32bfbb391
Saving successful migration to network...
  ... 0x29a9d9a2cb579bb9f53373d7255e0a8786bfc923021075ecd469a52e2078ed37
Saving artifacts...
Running migration: 2_deploy_storage.js
  Deploying ItemTokens...
  ... 0x2f76a27bf3bf442741d0adc5a5531474f1d8669608188ecec5668837541f6966
Error encountered, bailing. Network state unknown. Review successful transactions manually.
Error: The contract code couldn't be stored, please check your gas amount.
    at Object.callback (/usr/local/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/contract.js:147:1)
    at /usr/local/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/method.js:142:1
    at /usr/local/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/requestmanager.js:89:1
    at /usr/local/lib/node_modules/truffle/build/webpack:/~/truffle-migrate/index.js:225:1
    at /usr/local/lib/node_modules/truffle/build/webpack:/~/truffle-provider/wrapper.js:134:1
    at XMLHttpRequest.request.onreadystatechange (/usr/local/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/httpprovider.js:128:1)
    at XMLHttpRequestEventTarget.dispatchEvent (/usr/local/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:64:1)
    at XMLHttpRequest._setReadyState (/usr/local/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:354:1)
    at XMLHttpRequest._onHttpResponseEnd (/usr/local/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:509:1)
    at IncomingMessage.<anonymous> (/usr/local/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:469:1)
    at IncomingMessage.emit (events.js:164:20)
    at endReadableNT (_stream_readable.js:1054:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)
    at process._tickCallback (internal/process/next_tick.js:180:9)
```
