var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'Electron Wallet';
config.appDescription = 'Bitcoin Nova GUI Wallet';
config.appSlogan = 'Slow and steady wins the race!';
config.appId = 'org.bitcoinnova.wallet.electron';
config.appGitRepo = 'https://github.com/BitcoinNova/bitcoinnova-wallet-electron';

// default port number for your daemon (e.g. Bitcoinnovad)
config.daemonDefaultRpcPort = 45223;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'wallet';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'Bitcoinnova-service';

// version on the bundled service (Bitcoinnova-service)
config.walletServiceBinaryVersion = "v0.18.2";

// config file format supported by wallet service, possible values:
// ini -->  for Bitcoinnova service (or its forks) version <= v0.8.3
// json --> for Bitcoinnova service (or its forks) version >= v0.8.4
config.walletServiceConfigFormat = "json";

// default port number for your wallet service (e.g. Bitcoinnova-service)
config.walletServiceRpcPort = 8070;

// block explorer url, the [[TX_HASH]] will be substituted w/ actual transaction hash
config.blockExplorerUrl = 'http://explorer.bitcoinnova.org/?hash=[[TX_HASH]]#blockchain_transaction';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = 'pool.bitcoinnova.org';

// remote node list update url, set to null if you don't have one
config.remoteNodeListUpdateUrl = 'https://raw.githubusercontent.com/BitcoinNova/bitcoinnova-nodes-json/master/bitcoinnova-nodes.json';

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
  'pool.bitcoinnova.org:45223',
  'superblockchain.con-ip.com:45223',
];

// your currency name
config.assetName = 'BitcoinNova';
// your currency ticker
config.assetTicker = 'BTN';
// your currency address prefix, for address validation
config.addressPrefix = 'E';
// standard wallet address length, for address validation
config.addressLength = 95;
// intergrated wallet address length, for address validation
config.integratedAddressLength = 183;

// minimum fee for sending transaction
config.minimumFee = 0.01;
// minimum amount for sending transaction
config.mininumSend = 0.01;
// default mixin/anonimity for transaction
config.defaultMixin = 3;
// to convert from atomic unit
config.decimalDivisor = 1000000;
// to represent human readable value
config.decimalPlaces = 6;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79009fb00ca1b7130832a42de45142cf6c4b7f333fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [
  {
    name: 'Electron Wallet Donation',
    address: 'E5MJiTWo3cNehswKbj5zmoNfwr2JVidMf3bpCswzWeJQ7g3m3Bjvb8dAvs1RXq3F6dfW1UFTNQ3yULqeQbbgJ8GY1yUHPKC',
    paymentId: '',
  }
];
// cipher config for private address book
config.addressBookCipherConfig = {
  algorithm: 'aes-256-gcm',
  saltLenght: 128,
  pbkdf2Rounds: 10000,
  pbkdf2Digest: 'sha512'
};

module.exports = config;
