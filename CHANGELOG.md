# Buttercup Mobile Changelog

## v2.5.2
_2022-08-31_

 * **Bugfix**
   * ([#316](https://github.com/buttercup/buttercup-mobile/issues/316)) Cannot save changes with Dropbox vaults
   * ([#321](https://github.com/buttercup/buttercup-mobile/issues/321)) Cannot unlock Dropbox vaults

## v2.5.1
_2022-08-30_

 * **Bugfix**:
   * ([#304](https://github.com/buttercup/buttercup-mobile/issues/304)) Google Drive re-authorisation loop
   * Wallet screen crashes app (removed)

## v2.5.0
_2022-08-28_

 * Updated Buttercup core - Format B improvements/stability
 * Updated/removed deprecated dependencies

## v2.4.1
_2022-04-13_

 * **Bugfix**:
   * ([#312](https://github.com/buttercup/buttercup-mobile/issues/312)) Dropbox vault unlock fails with "Request Failed: 0 undefined"

## v2.4.0
_2022-04-09_

 * Password generator

## v2.3.0
_2022-01-30_

 * Read-only mode for offline vaults or failed requests
 * **Bugfixes**:
   * ([#229](https://github.com/buttercup/buttercup-mobile/issues/229)) WebDAV request caching preventing changes from showing

## v2.2.1
_2022-01-26_

**Android only**

 * **Bugfix**:
   * Android stability issue (non-deterministic) when restoring app state

## v2.2.0
_2022-01-23_

 * Autofill upgrade
   * Entry search
   * Automatic URL filtering (current site)
 * Google Drive re-authorisation for expired refresh tokens

## v2.1.0
_2022-01-09_

 * Android implementation
 * Auto-fill optional setting
 * New auto-fill storage
 * _iOS only_:
   * Webdav _web_ build

## v2.0.2
_2021-12-27_

**iOS only**

 * **Bugfix**:
   * Autofill not launching
 * React-Native upgrade (0.66)
 * Password (sensitive field) masking

## v2.0.1
_2021-12-25_

**iOS only**

 * **Bugfix**:
   * **Major encryption/decryption bug** on iOS: Causes fault with generating/verifying vault authentication information (HMAC)
 * Group sorting

## v2.0.0
_2021-12-22_

**iOS only**

 * Buttercup core v6
 * Completely new project
 * OTP easy access screen
 * Improved performance / stability
 * Local vaults
 * Entry icons
 * Entry type support

## v1.16.0
_2020-09-19_

 * Buttercup core v5 integration
   * Format B support
 * **Bugfix**:
   * ([#247](https://github.com/buttercup/buttercup-mobile/issues/247)) Search returns no results
   * Autofill would crash with large vaults (auto unlocking all)

## v1.15.1
_2020-08-19_

 * **Bugfix**:
   * ([buttercup-core#287](https://github.com/buttercup/buttercup-core/issues/287)) Vaults grow to enormous size

## v1.15.0
_2020-06-30_

 * [My Buttercup](https://my.buttercup.pw) integration
 * Buttercup core v4 support

## v1.14.0
_2020-02-16_

 * Google auth update (fix connection on Android) (partial fix for [#206](https://github.com/buttercup/buttercup-mobile/issues/206))
 * Russian transation
 * **Bugfix**:
   * Google auth wouldn't work on Android
   * German/English translations were mixed for some properties

## v1.13.0
_2020-01-11_

 * Localisation support
   * German translation
 * Camera support for OTP ingestion
 * Numerous tweaks and fixes for idle-screen overlay

## v1.12.0
_2019-12-01_

 * OTP/authentication codes area (TOTP only)
 * OTP QR-code recognition (built-in camera) (TOTP only)
 * OTP URI recognition (TOTP only)
 * Improved search interface/design
 * Upgraded navigation system
 * Entry "advanced" editing mode
   * Edit property keys
   * Change value types
 * **Bugfix**:
   * New meta items would not be removed upon pressing "Cancel"
   * Several entry property icons not working

## v1.11.0
_2019-11-25_

 * ([#196](https://github.com/buttercup/buttercup-mobile/issues/196)) Search button in header menu
 * ([#189](https://github.com/buttercup/buttercup-mobile/issues/189)) Remove iOS RCTGelocation build dependency
 * **Bugfix**:
   * ([#187](https://github.com/buttercup/buttercup-mobile/issues/187)) Entry property icons missing/incorrect

## v1.10.2
_2019-09-24_

 * **Bugfix**:
   * Google Drive would fail on Android with `DEVELOPER_ERROR`

## v1.10.1
_2019-09-15_

 * **Bugfix**:
   * Android bundle not built

_Released on iOS 2019-09-21_

## v1.10.0
_2019-09-14_

 * React Native to 0.59
 * Update to 64bit support
 * **Bugfix**:
   * App would crash during infinite request loop for permissions

## v1.9.1
_2019-08-29_

 * Android 64bit support

_Released to Android only._

## v1.9.0
_2019-08-27_

 * Google Drive integration
 * Password display uses monospace font

_Released to iOS only._

## v1.8.2
_2019-05-16_

 * **Bugfix**: ([#158](https://github.com/buttercup/buttercup-mobile/issues/158)) Android devices throw `Unknown type: null` error
 * Update icons for Android

## v1.8.1
_2019-01-19_

 * **Bugfix**: ([#137](https://github.com/buttercup/buttercup-mobile/issues/137)) Keychain access results in constant auth prompts
 * **Bugfix**: ([#136](https://github.com/buttercup/buttercup-mobile/issues/136)) Unable to create new vaults on iOS

## v1.8.0
_2019-01-17_

 * ([#125](https://github.com/buttercup/buttercup-mobile/issues/125)) iOS Autofill integration

## v1.7.0
_2019-01-01_

 * ([#69](https://github.com/buttercup/buttercup-mobile/issues/69)) Searching

## v1.6.0
_2018-12-14_

 * **Bugfix**:
   * ([#129](https://github.com/buttercup/buttercup-mobile/issues/129)) Android packaging failing
 * New Dropbox & WebDAV clients
 * React-Native -> 0.57

## v1.5.0
_2018-08-13_

 * ([#115](https://github.com/buttercup/buttercup-mobile/pull/115)) Offline archives

## v1.4.3
_2018-08-03_

 * **Bugfix**: (#112) App crashes when certain custom properties are edited or added

## v1.4.2
_2018-07-21_

 * **Bugfix**: (#111) Various Android UI issues

## v1.4.1
_2018-07-18_

 * **Bugfix**: App would crash on some Android phones due to bad gradle config

## v1.4.0
_2018-07-16_

 * **New crypto library** written in Rust
   * **Bugfix**: (#78) Possible tampering error

## v1.3.0
_2018-06-05_

May update:

 * Upgraded archive format for future format support
 * Fixed Android Touch Unlock support

## v1.2.0
_2018-04-07_

Feature release:

 * **Touch unlock** support for iOS and Android
 * Update React-Native to 0.54
 * Minor UI updates

## v1.1.2
_2017-11-01_

Android patch:

 * **Bugfix**: (#64) Using the Android back arrow to leave the app would cause intermittent crashes

## v1.1.1
_2017-10-27_

Patch release to fix some issues:

 * **Bugfix**: (#62) Saving would override remote changes without merging
 * Removed analytics

## v1.1.0
_2017-10-18_

Quick follow-up feature release:

 * Dropbox support
 * Analytics update (session fix)
 * "View-hidden" button for showing password field
 * Home screen face-lift

## v1.0.0
_2017-10-07_

First iOS release. Includes basic functionality:

 * Add/Remove archives
 * Add/Remove groups
 * Add/Remove/Edit entries
 * Connect ownCloud/Nextcloud/WebDAV archives (no Dropbox support yet)
 * Open entries in Safari (with password copied)
 * Auto-lock after 10 minutes of being in background
 * Auto-hide app contents on being moved to background
