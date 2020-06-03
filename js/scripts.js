$(document).ready(function() {
  $("form#userName").submit(function(event) {
    event.preventDefault();
      const personNameInput = $("input#personName").val();
      $(".personName").text("personNameInput");
      $("#output").text(personNameInput);

  });
});