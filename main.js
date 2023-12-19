var input = 'The windmills are killing us!!';
const vowels = ['a', 'e', 'i', 'o', 'u'];
var resultArray = [];

input.toLowerCase();
for (let i = 0; i < input.length; i++)
{
    if (input[i] === 'e') resultArray.push('e');
    if (input[i] === 'u') resultArray.push('u');  
    for (let j = 0; j < vowels.length; j++)
    {
        if (input[i] === vowels[j]) {
            resultArray.push(input[i]);
            break;
        }
    }
};

console.log(resultArray.join(""));
