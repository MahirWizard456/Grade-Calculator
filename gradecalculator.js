function calculateGrade() {
  var math = document.getElementById("math");
  var eng = document.getElementById("eng");
  var phy = document.getElementById("phy");
  var chem = document.getElementById("chem");

  var total = Number(math.value) + Number(eng.value) + Number(phy.value) + Number(chem.value);
  var percent = ((total / 4) || 0).toFixed(2);
  var grade = "";

  if (isNaN(total) || total < 0 || total > 400) {
      showResult("Total marks must be between 0 and 400");
      return false;
  }

  if (percent >= 80) grade = "A";
  else if (percent >= 70) grade = "B";
  else if (percent >= 60) grade = "C";
  else if (percent >= 50) grade = "D";
  else if (percent >= 40) grade = "E";
  else grade = "F";

  showResult("Total Mark: " + total + "<br>" + "Percent: " + percent + "<br>" + "Grade: " + grade);
  return false;
}

function showResult(message) {
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = message;
}
