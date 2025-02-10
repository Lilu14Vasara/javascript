//line by line code execute ,js-synchronous langauge
//single threaded -default js
//execution contex
// -print Elementline by line
// -not go to scond step before compeliting firt step


//blocking code  vs                        non blocking code
//block complete program flow           //does not block element
//dusra koy kam nhi kr skte             //dusra kam kr skte hi
//read file synch...                    //read file asynch...

// js engine        ________________   \ call-> web Api-in browser   
//                     call stack   |   \    | dom api 
// |  memory   |       |  ----|     |        | setTimeout
// |   heap    |       |      |     |        | setInterval
// |           |       |      |     |        | fetch
// |__________ |       |-glbal|     |           -
//                              |                |
//                              |               |
//                        task queue            |
//                        |              |< _  _|
//                        |              |

// all task add in queue and add all call back into call stack
// fetch call high priority