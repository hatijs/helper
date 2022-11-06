A progressive Node.js library for building astrology applications 🌕

## **Description**
Hati is an astrological integrated Node.js library based on Swiss Ephemeris C library. It uses modern JavaScript and is built with TypeScript.

Hati Helper is Node.js library, which has increased usability in @hatijs/core library.

## **Installation**

``` bash
# using npm
$ npm install --save @hatijs/helper

# using yarn
$ yarn add -D @hatijs/helper
```

## **Quick Started**
To run nodejs with docker:
``` bash
$ ./run.sh
```

Import from other:
``` TypeScript
import Hati from "@hatijs/helper";

const hati = new Hati(new Date('2022-01-01T00:00:00Z'), 9, 126.58, 37.22);
```

## **License**
The license for this project is the same as original [Swiss Ephemeris](http://www.astro.com/swisseph/swephinfo_e.htm).
