function takeANumber (parameter1, parameter2) {
  parameter1.push(parameter2);
  return "Welcome, "+parameter2+". You are number "+parameter1.length+" in line.";
}

function nowServing (katzDeliLine) {
  if (katzDeliLine === 0) {
    return "The line is currently empty.";
  }
  else {
    var line = ""
    for (i = 0, len = katzDelLine.length; i < len; i++) {
      if (i === len-2) {
        return line+String(i)
      }
    }
  }
}