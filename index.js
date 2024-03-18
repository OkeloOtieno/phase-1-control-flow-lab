function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <= 400) {
    return "This one is on me!";
  } else if (distance <= 2000) {
    return "That will be twenty bucks.";
  } else if (distance <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  city = city.toUpperCase(); // Ensure case-insensitivity
  return city === 'NYC' ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tipRating){
  // Write your code here!
  switch (tipRating.toLowerCase()) {  // Ensure case-insensitivity
    case 'generous':
      return "Thank you so much."
    case 'not as generous':
      return "Thank you.";
    default:
      return "Bye.";
  }
}

switch (key) {
  case value:
    
    break;

  default:
    break;
}