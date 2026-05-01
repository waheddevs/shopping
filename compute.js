/* Callback function:
define     call
callback   function
*/


/*
// define
function division(a, b, callback) {
    if (b === 0) {
        callback('Not divided by zero', null);
    } else {
        callback (null, a % b);
    }
};

// call
division(10, 0, function (err, data) {
    if(err) console.log('Error:', err);
    else {
        console.log('RESULT:', data);
        console.log('...');
    }
});
*/




// Example for CALLBACK HELL
// define
function division(a, b, callback) {
    if (b === 0) {
        callback('Not divided by zero', null);
    } else {
        callback (null, a % b);
    }
};

// call
division(10, 3, function (err, data) {
    if(err) console.log('Error:', err);
    else {
        console.log('RESULT:', data);
        console.log('...');

        division(10, 4, function (err, data) {
    if(err) console.log('Error:', err);
    else {
        console.log('RESULT:', data);
        console.log('...');
    }
});
division(20, 7, function (err, data) {
    if(err) console.log('Error:', err);
    else {
        console.log('RESULT:', data);
        console.log('...');
    }
});
    }
});