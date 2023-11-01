function gradingStudents(grades) {
    for(var i = 0; i < grades.length; i++){
        if(grades[i] >= 38){
            if(((Math.ceil(grades[i] / 5) * 5) - grades[i]) < 3)
                grades[i] = Math.ceil(grades[i] / 5) * 5;
            }
    }

    return grades;
}

let grades = [73, 67, 38, 33];
console.log(gradingStudents(grades));