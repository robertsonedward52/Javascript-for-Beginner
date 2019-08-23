let car = {
    make: 'bmw',
    model: '745li',
    year:  2019,
   GetPrice: function(){
       return  5000;
   },
   printDescription: function() {
       console.log(this.make + ' ' + this.model);
   }
} 

car.printDescription();
console.log(car.year);


var anotherPerson = { }
    anotherPerson.whateverPerson = 'Edward Robertson';
    console.log(anotherPerson);            // object return string


    var twoPerson = {}
    twoPerson.anyone = 'Playboy'; 
    console.log(twoPerson);


    var a = {
        myProperty: {b: 'hi'}
    };

console.log(a.myProperty.b);