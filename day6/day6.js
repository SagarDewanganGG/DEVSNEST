// array or not

var is_array = function(input) {
    if (toString.call(input) === "[object Array]")
      return true;
    return false;   
      };
  console.log(is_array('w3resource'));
  console.log(is_array([1, 2, 4, 0]));


// clone array
  
    function Arra_Clone(arra1){
    return arra1.slice(0);
  };
  console.log(Arra_Clone( [1, 2, 4, 0] ));
  console.log(Arra_Clone([1, 2, [4, 0]]));

  //colour joint 

  myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));
  
//max count

var arr1 = function(arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]){ 
    let mf= arr[0], maxcount=0;
    for(let i=0;i<arr.length;i++){
     let count =0;
      for(j=i;j<arr.length;j++){
        if(arr[i]==arr[j]){
           count++;
        }
      }if(maxcount<count){
        maxcount=count;
        mf=arr[i];
      }
    }
    
}
 console.log();

//first element 



