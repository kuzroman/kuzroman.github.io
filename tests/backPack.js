function packBagpack(scores, weights, capacity) {
  
  let load = [...Array(capacity+1)].map(i => 0)
  console.log(load, load.length);

  for (let i = 0; i < weights.length; i++) {

    load = load.map((totalCost, maxW) => {
      //console.log(totalCost, maxW); // max - index и вместимостть
      // console.log(weights[i] <= maxW &&     load[maxW - weights[i]] + scores[i]);
      return Math.max(totalCost, weights[i] <= maxW &&    load[maxW - weights[i]] + scores[i])
    });
  }
  return load.pop();
}


let res = packBagpack([ 15, 10, 9, 5 ], [ 1, 5, 3, 4 ], 8)

// Expected: 94
// let res = packBagpack(
//    [ 12, 16, 5, 15, 4, 13, 13, 11, 6, 15, 18 ],
//   [ 1, 4, 1, 3, 4, 2, 4, 2, 4, 3, 3 ],
//   17)
console.log(res);



// function packBagpack(price, weights, capacity) {
//   // console.log(price, weights, capacity)
//
//   let pack = {}
//   for (let i = 1; i < capacity + 1; i++ ) {
//     pack[i] = { w: 0, p: 0 }
//   }
//
//   let things = weights.map((w, i) => ({
//     v: price[i] / w,
//     p: price[i],
//     w: w,
//   })).sort((a, b) => b.v - a.v)
//
//   console.log('pack', pack);
//   console.log('things', things);
//
//   Object.keys(pack).forEach((packSize, i) => {
//     things.every((item, ii) => {
//       if (packSize < item.w) return true
//       if (packSize < pack[packSize].w + item.w) return true
//       pack[packSize].w += item.w
//       pack[packSize].p += item.p
//       return true
//     })
//   })
//
//   let res = Object.values(pack).sort((a, b) => b.p - a.p)[0].p
//   console.log(res);
//   return res
// }
//
// // Expected: 94
// let res = packBagpack([ 12, 16, 5, 15, 4, 13, 13, 11, 6, 15, 18 ],[ 1, 4, 1, 3, 4, 2, 4, 2, 4, 3, 3 ], 17)
// // let res = packBagpack([ 15, 10, 9, 5 ], [ 1, 5, 3, 4 ], 8)
// console.log('res', res);




