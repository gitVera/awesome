function shuffle(array) {
    const _array = array.slice(0)
    for (var i = _array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1))
      var temp = _array[i]
      _array[i] = _array[j]
      _array[j] = temp
    }
    return _array
  }
  
  function getRandomRolor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 10)];
    }
    return color;
  }

  export default function initializeDeck() {
    const cards = ['md-brush', 'md-wifi', 'md-cloud', 'md-cafe']
    .reduce((res, icon) => {
      const item = { icon, iconColor: getRandomRolor(), fon: getRandomRolor() }
      res.push(...[ item, item ])
      return res
    }, [])
    console.log('cards', cards)
    return shuffle(cards)
  }