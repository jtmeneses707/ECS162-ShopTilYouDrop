// eslint-disable-next-line import/no-extraneous-dependencies
import Fuse from 'fuse.js';
export default function fuzzySearch(options) {
  return (value) => {
    let resultArray = [];
    for (let i = 0; i < options.length; i++) {
      if ( (options[i].name.toLowerCase()).includes(value.toLowerCase()) ) {
        resultArray.push(options[i])
        // console.log("added option!");
      }
    }
    // console.log("RESULT ARRAY HERE: ",resultArray)
    return resultArray // ret. list of options objects
  }
}

// BROKEN PACKAGE CODE....(IGNORE)
// const fuse = new Fuse(options, {
//       keys: ['name', 'groupName', 'items.name'],
//       threshold: 0.3,
//   });

//   return (value) => {
//       if (!value.length) {
//           return options;
//       }

//       return fuse.search(value);
// };