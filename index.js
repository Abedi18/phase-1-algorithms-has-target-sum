function hasTargetSum(array, target) {
  // Write your algorithm here
/*1.Initialize an empty object.
  2.Loop through the array.
  3.Subtract the current element from the target value to get the difference.
  4.Check if the difference exists in the object. If it does, return true.
  5.Otherwise, add the current element to the object as a key with a value of true.
  6.If the loop completes without finding a match, return false.*/
  

/* 
  Write the Big O time complexity of your function here

  Time complexity: O(n), where n is the length of the input array.
*/


 /*  Add your pseudocode here*/
  const numObj = {};

  for (let num of array) {
    const diff = target - num;

    if (numObj[diff]) {
      return true;
    } else {
      numObj[num] = true;
    }
  }

  return false;
}


/*
  Add written explanation of your solution here
The function takes in an array of integers and a target value as parameters. It creates 
an empty object to store the numbers in the array as keys. It then loops through each 
number in the array and subtracts it from the target value to get the difference. It 
checks if the difference exists as a key in the object. If it does, then it means that 
there are two numbers in the array that add up to the target value, so it returns true.
If the difference is not in the object, it adds the current number as a key to the object
with a value of true. If the loop completes without finding a match, then it returns false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  it("returns true when the array is [4, 4] and the target is 8", () => {
    expect(hasTargetSum([4, 4], 8)).to.be.true;
  });
  it("returns false when the array is [2, 3, 4, 5] and the target is 10", () => {
    expect(hasTargetSum([2, 3, 4, 5], 10)).to.be.false;
  });
  it("returns true when the array is [0, -1, 1, -2, 2] and the target is 0", () => {
    expect(hasTargetSum([0, -1, 1, -2, 2], 0)).to.be.true;
  });
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
