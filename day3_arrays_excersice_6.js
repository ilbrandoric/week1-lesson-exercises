
//In this exercise we have an array seriesPending with some TV series.

let seriesPending = ["Breaking Bug", "Game of Drones", "Boolean 99", "Arrested Developer"];

//Add a new string element at the end of the seriesPending array. It should be the name of a TV series you would like to watch.
seriesPending.push("Stranger Strings");

for (let i = 0; i < seriesPending.length; i++) {
    console.log(seriesPending[i]);
    
    if (seriesPending[i] === "Boolean 99") {
        console.log("Found it!");
    }
}


//Remove the first element of the seriesPending array and add it at the end of seriesWatching array. 
// You can use a variable to store the removed element as seen before or try to do everything in the same line

let seriesWatching = [];
let removedSeries = (seriesPending.shift());

seriesWatching.push(removedSeries);

console.log(`
    Watching: ${seriesWatching} 
    Pending: ${seriesPending}`);

/*

Now let's move all the series to seriesWatching, but since we don't want to manually write the same code for every element, let's create a loop that will handle that:

We know that there are 4 elements left in seriesPending. So, write another loop that goes from 0 until it gets to 4. the code inside should execute exactly 4 times
Inside the loop, write the code that will remove the first element of the seriesPending and add it to seriesWatching. same as step 7
Add another console.log() to verify the length of the arrays after the loop. seriesPending should have 0 elements while seriesWatching should have 5.

*/