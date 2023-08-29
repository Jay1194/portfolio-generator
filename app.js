
// skips over to second index on the (0 index) - third array item
const profileDataArgs = process.argv.slice(2, process.argv.length);
 

// function with no parentheses and one param (due to arrow function)
const printProfileData = profileDataArr => {

    // Iterate and display array
    profileDataArr.forEach((profileItem) => console.log(profileItem));
};

// calling function
printProfileData(profileDataArgs);
