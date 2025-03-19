const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Use reduce to calculate the total number of batteries
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

console.log(totalBatteries); // Logs total battery count
