function scuberGreetingForFeet(distance){
  if (distance<=400){
    return("This one is on me!");
    }
  else if (distance > 400 && distance < 2000){
    return("That will be twenty bucks.");
    }
  else if (distance > 2000 && distance<=2500){
    return("I will gladly take your thirty bucks.");
  }
  else {
    return("No can do.");
  }
}

function ternaryCheckCity(city){
  let message;
  city==="NYC"? message="Ok, sounds good." : message="No go.";
  return (message);
    console.log(ternaryCheckCity(NYC));
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case "generous":
      return("Thank you so much.");
      break;
    
    case "not as generous":
      return("Thank you.");
      break;
    default:
      return("Bye.");
  }
}

scuberGreetingForFeet(199);
scuberGreetingForFeet(1500);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);
ternaryCheckCity("NYC");
switchOnCharmFromTip("generous");
switchOnCharmFromTip("not as generous");
switchOnCharmFromTip("thanks for everything");