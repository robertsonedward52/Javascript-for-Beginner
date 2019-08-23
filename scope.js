let a = 'first';
function scopeTest() {
    console.log(a);
   a = 'changed';
    if (a != '') {   // != is eqaul to //
        console.log(a);
    }
    let c = 'third';
}
scopeTest();
console.log(a);         