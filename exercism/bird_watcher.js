let birdsPerDay = [2, 5, 0, 7, 4, 1];



// QUESTION :--  Calculate the number of busy days ? 

// SUMMARY :-- Some days are busier that others. A busy day is one where five or more birds have visited your garden. Implement the BirdWatcher.getBusyDays() method to return the number of busy days.



const getBusyDays = (array) => {
        let count = 0;
        for(let i=0;i<array.length;i++){
            if(array[i] >= 5){
                count++;
            }
        }
        return count
};

console.log(getBusyDays(birdsPerDay));



// QUESTION :-- Check if there was a day with no visiting birds ?

// SUMMARY :-- Implement the BirdWatcher.hasDayWithoutBirds() method that returns true if there was a day at which zero birds visited the garden; otherwise, return false:


const hasDayWithoutBirds = (array) => {
    let visit = false ; 
    for(let i=0;i<array.length;i++){
        if(array[i] == 0){
            visit = true;
            break;
        }
    }

    return visit;
}

console.log(hasDayWithoutBirds(birdsPerDay));