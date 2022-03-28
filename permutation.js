const l = [1, 1, 2, 2];

const nextPermutation = (l) => {
  let firstDecreasing = -1;
  for (let i = l.length - 2; i >= 0; i--)
    if (l[i] < l[i + 1]) {
      firstDecreasing = i;
      break;
    }

  if (firstDecreasing === -1) return [l.reverse(), false];
  else {
    let nextBiggerIdx,
      nextBiggerV = Number.MAX_SAFE_INTEGER;
    for (let i = firstDecreasing + 1; i < l.length; i++) {
      if (l[firstDecreasing] < l[i] && l[i] < nextBiggerV) {
        nextBiggerV = l[i];
        nextBiggerIdx = i;
      }
    }

    l[nextBiggerIdx] = l[firstDecreasing];
    l[firstDecreasing] = nextBiggerV;

    return [
      [
        ...l.slice(0, firstDecreasing + 1),
        ...l.slice(firstDecreasing + 1).reverse(),
      ],
      true,
    ];
  }
};

console.log(nextPermutation(l));
