// const users = ["harry", "tmg", "raline", "jason", "meenah", "iyayi"];

// const followGraph = {
//   harry: ["tmg", "raline", "jason", "meenah", "iyayi"],
//   tmg: ["harry", "raline"],
//   raline: ["harry", "tmg", "iyaji"],
//   jason: ["tmg", "iyaji", "raline"],
//   meenah: ["tmg", "jason", "meenah", "iyayi"],
//   iyaji: [],
// };

// const adjecencyList = new Map();

// const addUser = (user) => {
//   adjecencyList.set(user, []);
// };

// const follow = (user, follower) => {
//   adjecencyList.get(user).push(follower);
// };

// users.forEach((user) => addUser(user));
// Object.keys(followGraph).forEach((user) => {
//   const followers = followGraph[user];

//   console.log(followers);

//   followers.forEach((follower) => follow(user, follower));
// });

// console.log(adjecencyList);

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const longestString = strs.reduce((ls, cs) => {
    if (ls.length >= cs.length) {
      return ls;
    }

    return cs;
  }, "");

  let prefix = "";

  let currentIndex = 0;

  while (currentIndex < longestString.length) {
    const prev = prefix;
    prefix += longestString[currentIndex];
    console.log("check-", prefix);
    for (let j = 0; j < strs.length; j++) {
      if (strs[j].startsWith(prefix)) {
        console.log("matched-", strs[j]);
        continue;
      } else {
        console.log("done");
        return prev;
      }
    }
    console.log("still-", prefix);
    currentIndex++;
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
