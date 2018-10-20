$(document).ready(function () {

  const determineTypeScore = function (array) {
    typeScore = [0, 0, 0, 0, 0, 0, 0, 0];
  
    array.forEach(element => {
  
      switch (element) {
        case "E":
          typeScore[0]++
          break;
        case "I":
          typeScore[1]++
          break;
        case "S":
          typeScore[2]++
          break;
        case "N":
          typeScore[3]++
          break;
        case "T":
          typeScore[4]++
          break;
        case "F":
          typeScore[5]++
          break;
        case "J":
          typeScore[6]++
          break;
        case "P":
          typeScore[7]++
          break;
      }
    });
    return typeScore;
  }

  $("#form").on("submit", function (event) {
    event.preventDefault();

    const radioValues = [];
    for (let i = 1; i < 21; i++) {
      const radioInput = $(`input[name='question${i}']:checked`).val()
      radioValues.push(radioInput);
    }

    const radioType = determineTypeScore(radioValues);

    const userData = {
      name: $("#name").val(),
      photo: $("#url").val(),
      score: radioType
    }

    console.log(userData);
    
    $('#form').trigger("reset");
  });

});