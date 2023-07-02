// 4th Exercise | larger number between two numbers

let number_1 = parseInt(prompt("Enter 1st number: "));
let number_2 = parseInt(prompt("Enter 2nd number: "));

function fourth_exercise (number_1, number_2)
{
    if (number_1 > number_2)
    {
        console.log("First number is larger")
    }
    else
    {
        console.log("Second number is larger")
    }
}

fourth_exercise(number_1, number_2)