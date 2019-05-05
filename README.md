## Bitcoin Nova Electron Wallet GUI.

### Features:

This wallet contains the basic functions required to mvanage your Bitcoin Nova assets:

* Wallet creation:
  * Create new wallet.
  * Import/recover from private keys OR mnemonic seed.
* Basic wallet operation/transactions:
  * Open an existing  wallet
  * Display wallet address & balance
  * Display & Backup private keys/seed
  * Sending/transferring. Integrated Address or Payment ID are supported. Also provides address lookup from your addressbook.
  * Transactions history listing/sorting/searching/detail.
  * Incoming transaction notification.
  * Export incoming, outgoing, or all transactions to csv file.
  * Rescan wallet from specific block height.
  * Perform wallet optimization.
  * Utilities: generate payment id and integrated address.
* Address book:
  * Add/Edit/Delete address entry.
  * Listing/sorting/searching existing entries.
  * Allow to store same wallet address with different payment id.
  * Autosave address after sending to new/unknown recipient
  * Allow to optionally create password protected address book.
* Misc:
  * Option to use system tray (on closing/minimizing wallet)
  * Provides list of public nodes, fetch/updated daily from [bitcoinnova-nodes-json](https://github.com/BitcoinNova/bitcoinnova-nodes-json) repo.
  * Allow to add custom node address.
  * Theme: Dark & Light Mode
  * [Keyboard shortcuts](docs/shortcut.md)

### Download &amp; Run ElectronWallet

#### Windows:
1. Download the latest installer here: https://github.com/BitcoinNova/bitcoinnova-wallet-electron/releases/latest
2. Run the installer (`ElectronWallet-<version>-win-setup.exe`) and follow the installation wizard.
3. Launch ElectronWallet via start menu or desktop shortcut.

#### GNU/Linux (AppImage):
1. Download latest AppImage bundle here: https://github.com/BitcoinNova/bitcoinnova-wallet-electron/releases/latest
2. Make it executable, either via GUI file manager or command line, e.g. `chmod +x ElectronWallet-<version>-linux.AppImage`
3. Run/execute the file, double click in file manager, or run via shell/command line (See: https://docs.appimage.org/user-guide/run-appimages.html)

#### macOS
1. Download latest archive here: https://github.com/BitcoinNova/bitcoinnova-wallet-electron/releases/latest
2. Extract downloaded zip archived
3. Run the executable binary (`ElectronWallet.app/Contents/MacOs/ElectronWallet`)

### Building/Packaging Bitcoin Nova Electron Wallet
You need to have `Node.js` and `npm` installed, go to https://nodejs.org and find out how to get it installed on your platform.

Once you have Node+npm installed:
```
# first, download Bitcoinnova-service binary for each platform
# from Bitcoin Nova official repo
# https://github.com/BitcoinNova/bitcoinnova/releases
# extract the Bitcoinnova-service executable somewhere

# clone the repo
$ git clone https://github.com/BitcoinNova/bitcoinnova-wallet-electron
$ cd bitcoinnova-wallet-electron

# install dependencies
$ npm install

# create build+dist directory
$ mkdir -p ./build && mkdir -p ./dist

# copy/symlink icons from assets, required for packaging
$ cp ./src/assets/icon.* ./build/

# build GNU/Linux package
$ mkdir -p ./bin/lin
$ cp /path/to/linux-version-of/Bitcoinnova-service ./bin/lin/
$ npm run dist-lin

# build Windows package
$ mkdir -p ./bin/win
$ cp /path/to/win-version-of/Bitcoinnova-service.exe ./bin/win/
$ npm run dist-win

# build OSX package
$ mkdir -p ./bin/osx
$ cp /path/to/osx-version-of/Bitcoinnova-service ./bin/osx/
$ npm run dist-mac
```

Resulting packages or installer can be found inside `dist/` directory.
