const alphabet = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  x: '-..-',
  y: '-.--',
  z: '--..',
}

const smorse = (word) => {
  const smorseWord = []
  const wordArr = word.split("")

  wordArr.forEach(e => {
    smorseWord.push(alphabet[e])
  });

  return smorseWord.join("")
}

module.exports = {
  smorse: smorse,
}
