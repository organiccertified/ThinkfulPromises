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
    console.log("There was an error:", error);
  });
  
    
}

function fullSession(question) {

  const welcomeMsg =   welcome()
  .then(function(result){
    console.log(result)})

  return tell(question)
    .then((response)=> [
      

    welcome().then(),
    `Your question was: ${question}`,
    `Your fortune is: ${response}`,
    goodbye().then()
 
  ])
  .catch((error)=>{
    console.log("There was an error:", error);
  })
  }


 
  



module.exports = { getFortune, fullSession };

let result = fullSession("this is a question?")
console.log(result)

result.then(function(result1){
  console.log(result1)
})

