// question 3
// Bolatito just got admitted to Greenfield High School as an Arts student. To commence her studies, she needs to know the subjects she will be taking as an Arts student. All students have to take the General subjects.
// 	The subjects for each class group are as follows:
// 	Science Subjects - Physics, Chemistry, Biology, Technical Drawing 
// Social Science Subjects - Accounting, Commerce, Marketing, Geography
// Arts Subjects - Government, Economics, Literature, History
// General Subjects - English, Mathematics

// Using if…else conditional statement, write a program that will help Bolatito determine the subjects she will be taking for the session using her class group. Also, in the case of an invalid class group, your output should be the General subjects. 


let ClassGroups = 'Art Subjects';
if (ClassGroups = 'Art Subjects') {
    console.log('Government, Economics, Literature, History');
}
else if (ClassGroups = 'Social Science Subjects') {
    console.log('Accounting, Commerce, Marketing, Geography');
}
else if (ClassGroups = 'Science Subjects') {
    console.log('Physics, Chemistry, Biology, Technical Drawing');
}
else {
    console.log('English, Mathematics');
}



// Question 5
// Write a program that takes a positive number (num) and finds the power of 2 nearest to that number. The program stores the resulting value to pwr. Then you log the answer in this format: 
// “The number (pwr) is the power of 2 nearest to (num).”

let pwr;
let firstValue;
function PowerOf2(num) {
    for (let i = 0; i < num; i++) {
         pwr = 2 ** i;
        if (pwr < num) {
            firstValue = pwr;
        }
        for (let i = 0; i < num; i++) {
            pwr = 2 ** i;
            if (pwr < num) {
                firstValue = pwr;
            }
            pwr = num - firstValue > (firstValue * 2) - num ? firstValue * 2 : firstValue;
            console.log(pwr); 
            console.log('The number' + pwr + 'is the power of 2 nearest to' + num);
        }
    }
}