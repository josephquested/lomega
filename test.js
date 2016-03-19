var Ω = require('./index.js')
var arr = ['some ', 'information', 'arrays']
var obj = {key1: '1', key2: 2, key3: true}

Ω('expect 8 console.logs:', '')

Ω('1. standard log √')

Ω('2. standard' + ' + log √')

Ω(`3. backtick log √`)

Ω('4a. multi line ',
  '4b. log √')

Ω('5a. multi line ',
  `5b. backtick log √`)

Ω('6. pulling ' + arr[0] + arr[1] + ' from ' + arr[2])

Ω(`7. pulling ${arr[0]}backtick ${arr[1]} from ${arr[2]}`)

Ω(`8a. it's ${obj.key3}! i'm pulling ${obj.key1} or ${obj['key2']} variables`,
  '8b. from multiple ' + arr[2] + ' and objects using backticks + singlequotes on different lines!')
