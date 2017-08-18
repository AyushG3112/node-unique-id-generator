# node-unique-id-generator
A npm module to generate Unique ID and GUID for node.

Table of Contents
================= 

  * [Installation](#installation)
  * [How to use](#howtouse)
    * [Generate Unique ID](#genuniqueid)
      * [Unique ID with no prefix or suffix](#genuniqueidnoprenosuf)
      * [Unique ID with prefix](#genuniqueidpre)
      * [Unique ID with prefix and suffix](#genuniqueidpresuf)
      * [Unique ID with suffix](#genuniqueidsuf)
    * [Generate GUID](#genguid)

<a name='installation'></a>
## Installation
```
npm install node-unique-id-generator --save
```
<a name='howtouse'></a>
## How to use


<a name='genuniqueid'></a>
### Generate Unique ID
<a name='genuniqueidnoprenosuf'></a>
#### Unique ID with no prefix or suffix
```javascript
const uidGenerator = require('node-unique-id-generator');
console.log(uidGenerator.generateUniqueId()); // 149897061806898563200922e1443e123
```
<a name='genuniqueidpre'></a>
#### Unique ID with prefix
```javascript
const uidGenerator = require('node-unique-id-generator');
console.log(uidGenerator.generateUniqueId('pre-')); // pre-149897061806898563200922e1443e123
```
<a name='genuniqueidpresuf'></a>
#### Unique ID with prefix and suffix
```javascript
const uidGenerator = require('node-unique-id-generator');
console.log(uidGenerator.generateUniqueId('pre-','-suf')); // pre-149897061806898563200922e1443e123-suf
```
<a name='genuniqueidsuf'></a>
#### Unique ID with suffix
```javascript
const uidGenerator = require('node-unique-id-generator');
console.log(uidGenerator.generateUniqueId('','-suf')); // 149897061806898563200922e1443e123-suf
```


<a name='genguid'></a>
### Generate GUID
```javascript
const uidGenerator = require('node-unique-id-generator');
console.log(uidGenerator.generateGUID()); // 5ccf7d01-3553-3e2b-a96e-1200cda69640
```
