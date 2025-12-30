// synchronous = Executes line by line consecutively in sequential manner
//               Code that waits for an operation to complete.

// asynchronous = Allows multiple operations to be performed concurrently without waiting
//                Doesn't block the execution flow and allows the program to continue
//                (I/O operations, network request, fetching data)
//                Handled with: Callbacks, Promises, Asyn/Await


function func1(func2){
    setTimeout(()=>{console.log("Task1"); func2()}, 3000);
}

function func2(){
    console.log("Task2")
    console.log("Task3")
    console.log("Task4")
}
func1(func2)