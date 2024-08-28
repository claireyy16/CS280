//first class introduction

const fallAsleepTime = new Date();
fallAsleepTime.setMinutes(fallAsleepTime.getMinutes() + 14); //get current time + 14 minutes
const config = {
    timeStyle: "short"
};

console.log("Fall Asleep: ", fallAsleepTime.toLocaleTimeString("en-US", config))

//object creation
const wakeUpTime = new Date(fallAsleepTime); 
//empty array of times
const wakeUpTimes = [];

for (let i = 1; i <= 6; i++) {
    wakeUpTime.setMinutes(wakeUpTime.getMinutes() + 90);
    const wakeUpTimeString = wakeUpTime.toLocaleTimeString("en-US", config);
    wakeUpTimes.push(wakeUpTimeString); //adds to array
}

console.log("Wake up times are:", wakeUpTimes);