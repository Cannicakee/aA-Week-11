function ageSort(users) {
  return users.sort((user1, user2) => user1.age - user2.age);
}

function oddEvenSort(arr) {
  arr.sort((a, b) => {
    if (a % 2 === 0 && b % 2 !== 0) {
      return 1;
    } else if (a % 2 !== 0 && b % 2 === 0) {
      return -1;
    } else {
      return a - b;
    }
  })
  return arr;
}

function validAnagrams(s, t) {
  let sort1 = s.split('').sort().join('');
  let sort2 = t.split('').sort().join('')

  return sort1 === sort2;
}

function reverseBaseSort(arr) {
  function findBase(num) {
    return Math.floor(Math.log10(num) + 1)
  }

  arr.sort((a, b) => {
    const base1 = findBase(a)
    const base2 = findBase(b)

    if (base1 !== base2) {
      return base2 - base1;
    } else {
      return a - b;
    }
  })

  return arr;
}

function frequencySort(arr) {
  const numMap = new Map()
  for (num of arr) {
    numMap[num] = (numMap[num] || 0) + 1;
  }

  arr.sort((a, b) => {
    if (numMap[a] === numMap[b]) {
      return b - a;
    }

    return numMap[a] - numMap[b];
  })
  return arr;
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
