function computeJoinPoint(s1, s2) {
  // Write your code here
  // To debug: console.error('Debug messages...');

  while (s1 != s2) {
    s1 =
      s1
        .toString()
        .split("")
        .map(Number)
        .reduce((a, b) => a + b) + s1;
    s2 =
      s2
        .toString()
        .split("")
        .map(Number)
        .reduce((a, b) => a + b) + s2;

    console.log({ s1, s2 });

    if (s1 == s2) {
      return s1;
    }
  }

  return s1;
}

console.log(computeJoinPoint(471, 480));
