$(document).ready(function() {
  $("form#userName").submit(function(event) {
    event.preventDefault();
      const personNameInput = $("input#personName").val();
      const flavor = $("input:radio[name=flavor]:checked").val();

      $(".personName").text("personNameInput");
      $(".food").text("flavor");

      $("#output1").text(personNameInput);
      $("#output2").text(flavor);
     

  });
});