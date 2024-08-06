function volume()
{
   let rad=prompt("Enter the value of radius:");
   let high=prompt("Enter the value of height:");
   let result=(3.14*rad*rad*high);
   alert(`The Volume of Cylinder is: ${result}`);
}
function circum()
 {
  let rad = prompt("Enter the value of radius:");
  let result =2*3.14*rad;
  alert(`The circumference of the Circle is: ${result}`);
}
function area() {
  let side= prompt("Enter the value of side:");
  let result = side*side;
  alert(`The area of the Square is: ${result}`);
}
function oddeven()
{   
    let num = prompt("Enter a number:");
    
    if(num%2==0)
    {
        alert(`${num} is an Even number`)
    }
    else
    {
        alert(`${num} is an Odd number`);
    }
}

function si()
{
    let p=prompt("Enter the principal amount (in rupees) :");
    let r=prompt("Enter the rate of interest (in percentage) :");
    let t=prompt("Enter the time duration(In Years) :");
    let si=(p*r*t)/100;
    alert(`Interest Accumulated at the end : Rs. ${si}`);
}