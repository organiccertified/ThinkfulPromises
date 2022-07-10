const { welcome, goodbye, tell } = require("../utils/fortune-teller");

function ask(question) {
  return tell(question)
  .then((response) => [
    `Your question was: ${question}`,
    `Your fortune is: ${response}`,
  ]);
}

function getFortune(question) { 
  return tell(question)
  .then((response) => [
    `Your question was: ${question}`,
    `Your fortune is: ${response}`
  ])
  .catch((error) => {
    return error;
  });
  
    
}

function fullSession(question) {

  return welcome()
    .then((welcomeMessage) =>
      tell(question)
        .then((response) => 
          goodbye()
            .then((goodbyeMessage) => [ 
            `${welcomeMessage}`,
            `Your question was: ${question}`,
            `Your fortune is: ${response}`,
            `${goodbyeMessage}`
            ])))


    .catch((error)=> 
            welcome()
              .then((welcomeMsg) => 
                goodbye()
                .then((goodbyeMsg) =>[
                  `${welcomeMsg}`,
                  `${error}`,
                  `${goodbyeMsg}`
                ])
              )
          )}


 
  



module.exports = { getFortune, fullSession };

let result = fullSession()
console.log(result)

result.then(function(result1){
  console.log(result1)
})
