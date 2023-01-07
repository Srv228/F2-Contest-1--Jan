/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
 arr.map(printingThroghMap);

  function printingThroghMap(arrayList) {
    if (arrayList.profession === "developer") {
      console.log(arrayList);
    }
  }  
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach(printingThroghForEach);

  function printingThroghForEach(arrayList) {
    if (arrayList.profession === "developer") {
      console.log(arrayList);
    }
  }
}

function addData() {
  //Write your code here
  let newObj = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newObj);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here
   let filtered_arr = arr.filter(function (val) {
     if (val.profession !== "admin") {
      
      return val;
    }
  });
  console.log(filtered_arr);
}

function concatenateArray() {
  //Write your code here
   let arr1 = [
    { id: 5, name: "Sourav1", age: "25", profession: "Frontend Developer" },
    { id: 6, name: "Sourav2", age: "26", profession: "Backend Developer" },
    { id: 7, name: "Sourav3", age: "27", profession: "SDE" },
  ];

  let concatArray = arr.concat(arr1);
  console.log(concatArray);
}
