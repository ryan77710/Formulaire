const $ = document;
$.addEventListener("DOMContentLoaded", () => {
  console.log("page loaded");
  document
    .querySelector("#contact-form")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = {
        firstname: $.querySelector("#firstname").value,
        lastname: $.querySelector("#lastname").value,
        email: $.querySelector("#email").value,
        subject: $.querySelector("#subject").value,
        message: $.querySelector("#message").value,
      };
      console.log(data);

      if (
        data.firstname === "" ||
        data.lastname === "" ||
        data.email === "" ||
        data.subject === ""
      ) {
        console.log("you must complete all the fields");
      } else {
        const response = await axios.post(
          "https://ryan-formulaire-backend.herokuapp.com/",
          data
        );
        console.log(response);
      }
    });
});
