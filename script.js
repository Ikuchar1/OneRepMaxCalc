const weightBox = document.querySelector("#weight");
const repsBox = document.querySelector("#reps");
const resultText = document.querySelector("#result-text");

function calculateMax(){
    let max = 0;
    
    if((weightBox.value <= 0 || weightBox.value > 1500)){
        //makes sure valid input for weight
        alert("Please enter valid number for the weight");
    } else if((repsBox.value <= 0 || repsBox.value > 30)){
        //makes sure valid input for reps
        alert("Please enter valid number for the reps");

    } else{
        //finds max
        let weight = weightBox.value;
        let reps = repsBox.value;

        max = weight / (1.0278 - 0.0278 * reps);

    }

    return max.toFixed(1);

}

function updateText(){
    const max = calculateMax();

    if(max !== 0){
        resultText.textContent = "Your one rep max is " + max + " lbs!";
    }
}