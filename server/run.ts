function rotateArr(arr: Number[], step: number): Number[] {
  // I could have mutated the original arr too
  const outputArr = [...arr];

  //loop throught the array and push the rotated items into it
  for (let i = 0; i < step; i++) {
    outputArr.push(outputArr[i]);
  }

  //delete the stale array items
  for (let j = 0; j < step; j++) {
    outputArr.shift();
  }
  return outputArr;
}

function isMonotonic(arr: Number[]): Boolean {
  let monoLeft = true;
  let monoRight = true;

  // loop thru the arr and check for the side by side items that makes the array non-monotonic
  for (let i = 0; i < arr.length - 1; i++) {
    // To check if
    // array is not increasing
    if (arr[i] > arr[i + 1]) {
      monoLeft = false;
    }
    if (arr[i] < arr[i + 1]) {
      monoRight = false;
    }
  }

  // Pick one whether inc or dec
  return monoLeft || monoRight;
}
