/* Asynchronous funtion: Callback vs Async vs Promise

// ! Callback lar to'laqonnli asychronous da ishlamaydi.

// ! Async.larda setInterval / setTimeout kabi metodlar ishlamaydi, Ular callback da ishlatiladi
// Deylik bizga asyn.larda ham bularni ishlatishga majbur bo'lsak, bizga promise.lar yordam beradi

    DEFINE          CALL
    callback        function
    async/await     then/catch
    promise         then/catch

*/

const { rejects } = require("node:assert");

/*
// define
function division(a, b, callback) {
    if (b === 0) {
        callback('not divided by zero', null);
    } else {
        return a % b;
    }
};

// console.log('passed here A')
// call

const result = division(10, 3, function (err, data) {
    if(err) console.log('Error', err);
    else {
        setInterval(function() {
          // console.log('passed here B')
          console.log('RESULT:', data);
          console.log('...');
        }, 2000)
    }
});

console.log('Result:', result)
// console.log('passed here C')
*/


/*
async function division(a, b) {
    if (b === 0) {
        throw new Wrror('Not divided by zero');
    } else {
        return a % b;
    }
};

division(10, 3).then(data => {
    console.log('Result:', data)
    console.log('...')
}).catch(err => {
    console.log('Error division:', err)
});
*/


function division(a, b) {
  return new Promise((resolve, reject) => {
      if (b === 0) {
        reject('Not divided by zero');
      } else {
          setTimeout(function() {
              resolve(a % b);
          }, 5000);

      }
  })

};

division(10, 3).then(data => {
    console.log('Result:', data)
    console.log('...')
}).catch(err => {
    console.log('Error division:', err)
});

/* XULOSA
    CALLBACK      > qayta-qayta javob beradigan holatlarda

    ASYNC / AWAIT > o'zining sintaksisi qulayligida(callback hamda promise qila olmaydigan ishlarni qila oladi)

    PROMISE       > ASYNC qila olmaydigan ishlarni qila olganida

*/