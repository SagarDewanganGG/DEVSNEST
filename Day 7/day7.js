// first : print the student details

var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
console.log(student.name,student.rollno,student.sclass);  //1
console.log(student);                                     //2
// std_detail= function(){
//      return this.name +","+ this.rollno +","+ this.sclass;
// }
//console.log(std_detail);


//second : delete a property value from object

var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
//output before removing value
console.log(student);
delete student.rollno;
//output after removing
console.log(student);

// fourth: Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
// { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
// { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 

var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },{ author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];

for(let i=0; i < library.length;i++){
    let co = "'" + library[i].author + "publish" + library[i].title;
    if(library[i].readingStatus)
    {
        console.log("already read" + co);
    }
    else{
        console.log("not yet read" + co);
    }

}

