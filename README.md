# Ω LOMEGA Ω

##An npm package for quick console.log action

What if I told you that you could become literally ten times more efficient in every way?   
**...Get your head out of the clouds, goofball!** There's no way I can offer you that.
But, I can offer you a console.log solution that is ten times more efficient. Lomega (Ω).

##How do I install lomega?

Simply save lomega into your project with the following command:

```js
npm install lomega --save
```

then import it into your project like so:

```js
// es6
import Ω from 'lomega'

// es5
var Ω = require('lomega')
```

What's that? You don't know how to *"do"* an omega symbol? Franky I'm not even sure that you're worthy of this package, but I will try to exercise patience. And lucky for you, typing the **Ω** symbol is as easy as pressing the **option + z**  keys on your Mac keyboard! Windows or Linux user? No problem:    

**Windows users:** You could possibly download some kind of *"driver"*, whatever that means.  
**Linux users:** I'm sure the *"open source"* community has some kind of crowd sourced solution to this problem, try asking on one of your little *"forums"*.

##How do I use lomega?

Ah, this is where the real magic begins: After lomega is set up, console.log anything you wish by simply typing:

```js
Ω('I literally can not believe how easy this is!')

// I literally can not believe how easy this is!
```

And it gets even sweeter than that. Let's say I wanted some information split over a few different lines, I could perform my magic like so:

```js
const arr = ['...simply ', 'indescribable']
Ω('my love for lomega is:', arr[1], arr[0] + arr[1])

// my love for lomega is:
// indefinable
// ...simply indefinable
```
```js
const arr = ['some ', 'information', 'arrays']
const obj = {key1: '1', key2: 2, key3: true}
Ω(`it's ${obj.key3}! i'm pulling ${obj.key1} or ${obj['key2']} variables`,
  'from multiple ' + arr[2] + ' and objects using backticks + singlequotes on different lines!')

// it's true! i'm pulling 1 or 2 variables
// from multiple arrays and objects using backticks + singlequotes on different lines!
```

So, what are you waiting for? Start making that weird little hook shape with your hand, hit those **option + z** keys and never type the phrase console.log again.

##future features:
*colored log support*
*multiline arguments indent on each line subsequent line*
