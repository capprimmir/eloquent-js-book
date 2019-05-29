//compare if two values are equal or objects have the same property values using recursive

function deepEqual (item1, item2) {
  if (item1 === item2 ) return true;
  if ((typeof item1 == 'object' && item1 != null) && 
      (typeof item2 == 'object' && item2 != null)) {
        //get properties of each object
        let keys1 = Object.keys(item1), keys2 = Object.keys(item2);

        // check if different length
        if (keys1.length != keys2.length) return false;

        // check if item in one array are included in other array
        // call the function again using recursive
        for (key of keys1) {
          if (!keys2.includes(key) || !deepEqual(item1[key], item2[key])) return false;
        }
       
  }
  return true;
}
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));