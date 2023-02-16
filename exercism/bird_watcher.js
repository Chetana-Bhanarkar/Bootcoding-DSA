
// QUESTION :-- Check what the counts were last week ?

// SUMMARY :-- For comparison purposes, you always keep a copy of last week's counts nearby, which were: 0, 2, 5, 3, 7, 8 and 4. Implement the BirdWatcher.getLastWeek() method that returns last week's counts:

let lastweek = [0, 2, 5, 3, 7, 8, 4]
const getLastWeek = (array) =>{
    return lastweek;
}

console.log(getLastWeek(lastweek));


// --------------------------------------------------------------------------------------


// QUESTION :--  Calculate the number of busy days ? 

// SUMMARY :-- Some days are busier that others. A busy day is one where five or more birds have visited your garden. Implement the BirdWatcher.getBusyDays() method to return the number of busy days.


let birdsPerDay = [2, 5, 0, 7, 4, 1];

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


// --------------------------------------------------------------------------------------

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


// --------------------------------------------------------------------------------------

// QUESTION :-- Check how many birds visited today ?

// SUMMARY :-- Implement the BirdWatcher.getToday() method to return how many birds visited your garden today. The bird counts are ordered by day, with the first element being the count of the oldest day, and the last element being today's count.


const getToday=(array)=>{
    return array[array.length-1];
}

console.log(getToday(birdsPerDay));