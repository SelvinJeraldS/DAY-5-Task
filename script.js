var resume = {
      "Name": "Selvin Jerald S",
      "Address": "Chennai",
      "Phoneno":[
        9840942950,
        8925617102
    
      ],
      "DOB":"21.3.2000",
      "Education":"BE",
      "Passedout":2022,
      "Skills":{
        "Frontend ": ["html",'css','React'],
        "Backend": ["nodejs","Expressjs"]
      }
    
    };
 
    let resumeArray = Object.entries(resume);

// Iterate over the array using a for loop
for (let i = 0; i < resumeArray.length; i++) {
    let key = resumeArray[i][0];
    let value = resumeArray[i][1];
    console.log(key + ": " + JSON.stringify(value));
}

// Iterate over the array using a for in loop


for (let key in resume) {
    console.log(key + ": " + resume[key]);
}

// Iterate over the array using a for of loop

for (let key of Object.keys(resume)) {
    console.log(key + ": " + resume[key]);
}

// Iterate over the array using a for Each loop


Object.keys(resume).forEach(function(key) {
    console.log(key + ": " + resume[key]);
});
