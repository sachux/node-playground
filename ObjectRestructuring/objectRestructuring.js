
//Object Restructuring 
const classDetails = {
    strength: 78,
    benches: 39,
    blackBoard:1
  }
  
  const {strength:classStrength, benches:classBenches,blackBoard:classBlackBoard} = classDetails;
  
  console.log(classStrength); // Outputs 78
  console.log(classBenches); // Outputs 39
  console.log(classBlackBoard); // Outputs 1