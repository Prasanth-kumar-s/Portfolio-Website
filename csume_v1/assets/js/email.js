 function sendEmail(event) {
    event.preventDefault(); // Prevent default form submission

    // Gather input values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('number').value;
    const email = document.getElementById('email_1').value;
    const message = document.getElementById('message').value;

    // Prepare template parameters
    const templateParams = {
        name: name,
        phone: phone,
        email: email,
        message: message
    };

    console.log('Sending email with the following parameters:', templateParams);

    // Send email using EmailJS
    emailjs.send("service_pisg80p", "template_3o2buus", templateParams, "qv3aysVmwafjMKZkj")
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully!');
    }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send email. Please try again later.');
    });
}
