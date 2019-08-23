/*
var students = new Array("Robertson", "Edward", 22);
console.log(students[2])
*/

/*
var animals = ["Monkey", "Deer", "Chickey", "Lion"];
console.log(animals);
*/

/*
var places = ["Monkey", "Deer", "Chickey", "Lion"];
console.log(places[3]);
*/

/*
var sports = {football:"scorer", outdoor:"Basketball", indoor:"Volley ball"};
console.log(sports.football);
*/

/*
var children, name, age, i;
var children = ["Maxwell", "Rebecca", "Tracy", "Beny"];
var name = children.length;

 name = "<ul>";
for (i = 0; i < name; i++) {
    name += "<li>" + children[i] + "</li>";
}
name += "</ul>";
console.log(name);
*/

var children = ["Maxwell", "Rebecca", "Tracy", "Beny"];
console.log(children[0]);

children.forEach(function() {
    console.log(children);
})

var months = ["January", "Feburary", "March", "April", "May", "June"];
console.log(months[0]);

months.forEach(function(month, index) {
    console.log("These are the Months of the year ${index+} -- ${month}");
})

/*
var girls = ["t.girls", "mary", "nana", "ola"];
girls.push();
console.log(girls)\
*/

var girls = ["t.girls", "mary", "nana", "ola"];
console.log(girls.pop());
console.log(girls);

var food = ["orange", "bread", "apple", "banna"];
console.log(girls.concat(food));

var zahlen = ["orange", "bread", "apple", "banna"];
console.log(zahlen.join("!"));
console.log(zahlen.reverse());
console.log(zahlen.shift());
console.log(zahlen.unshift());
console.log(zahlen.slice());
console.log(zahlen.sort());
console.log(zahlen.push("We are Programmers"));
console.log(zahlen);

