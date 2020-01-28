var myTasksArray = [];
function addTask(task) {
    myTasksArray.push(task);
    console.log("Item " + task + " has been added to the Array");
    return myTasksArray.length;
}
function listAllTasks() {
    // for(let i = 0; i <myTasksArray.length; i++) {
    // }
    console.log("Array contains the following items: ");
    myTasksArray.forEach(function (task) {
        console.log(task);
    });
}
function deleteTasks(task) {
    var index = myTasksArray.indexOf(task);
    if (index > -1) {
        myTasksArray.splice(index, 1);
        console.log("Item " + task + " deleted from the Array");
    }
    else {
        console.log("Item " + task + " not in array.");
    }
    return myTasksArray.length;
}
addTask("Complete Lab");
var numberOfTasks = addTask("Eat Breakfeast");
console.log("The number of task to do today is " + numberOfTasks);
listAllTasks();
deleteTasks("Complete Lab");
