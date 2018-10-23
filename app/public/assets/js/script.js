$(document).ready(function () {

  const determineTypeScore = function (array) {
    const typeScore = [0, 0, 0, 0, 0, 0, 0, 0];
    const typeKey = ["E", "I", "S", "N", "T", "F", "J", "P"]

    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < typeKey.length; j++) {
        if (array[i] === typeKey[j]) {
          typeScore[j]++;
        }
      }
    }
    return typeScore;
  }

  const determineType = function (array) {
    const typeKey = ["E", "I", "S", "N", "T", "F", "J", "P"]
    let mbtiString = "";

    for (let i = 0; i < 7; i += 2) {
      (array[i] > array[i + 1]) ? mbtiString += typeKey[i]: mbtiString += typeKey[i + 1];
    }
    return mbtiString;
  }

  $("#form").on("submit", function (event) {
    event.preventDefault();

    const radioValues = [];
    for (let i = 1; i < 21; i++) {
      const radioInput = $(`input[name='question${i}']:checked`).val()
      radioValues.push(radioInput);
    }

    const radioType = determineTypeScore(radioValues);

    const mbtiType = determineType(radioType);

    const userData = {
      name: $("#name").val(),
      photo: $("#url").val(),
      score: radioType,
      type: mbtiType
    }

    console.log(userData);

    $.ajax({
      url: "/api/quiz",
      method: "POST",
      data: userData
    }).then(function (response) {
      $("#typeModal").modal("show");
      console.log(response); 
    })

    $("#form").trigger("reset");
  });
});