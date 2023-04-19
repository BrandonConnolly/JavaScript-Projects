const form = document.getElementById("inTouch-form");
const inTouchInfo = document.getElementById("inTouch-info");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const product = document.getElementById("product").value;
  const inTouchInfoString = `
          <div class="customer-info-entry">
            <h2>Contact Information:</h2>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Nature of Inquiry: ${product}</p>
            <h2>Thanks for reaching out!</h2>
            <h2>Please allow 2-3 business days for a reply.</h2>
            <hr />
          </div>
          `;
  inTouchInfo.insertAdjacentHTML("beforeend", inTouchInfoString);
});
