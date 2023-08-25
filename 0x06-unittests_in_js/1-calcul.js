function calculateNumber(type, a, b) {
  const an = Math.round(a);
  const bn = Math.round(b);

  if (type === 'SUM') {
    return an + bn;
  } else if (type === 'SUBTRACT') {
    return an - bn;
  } else if (type === 'DIVIDE') {
    if (bn === 0) {
      return 'Error';
    }
    return an / bn;
  } else {
    throw new Error('Invalid type');
  }
}

module.exports = calculateNumber;
