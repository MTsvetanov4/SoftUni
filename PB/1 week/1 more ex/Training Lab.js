function trainingLab(input){
    let length = Number(input[0])*100;
    let width = Number(input[1])*100-100;
    let workingSpaceWidth = 70;
    let workingSpaceLenght = 120;
    let numberOfWorkingSpacesInRow = Math.floor(width/workingSpaceWidth);
    let numberOfWorkingSpacesInColumn = Math.floor(length/workingSpaceLenght).toFixed(0);
    
    
    let workingSpaces = numberOfWorkingSpacesInRow*numberOfWorkingSpacesInColumn-3;
    
    console.log(workingSpaces.toFixed(0));
    }