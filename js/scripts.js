$(document).ready(function() {
  $("form#userName").submit(function(event) {
    event.preventDefault();
      const personNameInput = $("input#personName").val();
      const foodType = $("input#foodType").val();

      $(".personName").text("personNameInput");
      $("#output1").text(personNameInput);
      $("#output2").text(foodType);

  });
});