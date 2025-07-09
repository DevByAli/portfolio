document.getElementById("emailForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.elements["name"].value;
    const email = this.elements["email"].value;
    const subject = this.elements["subject"].value;
    const message = this.elements["message"].value;

    const body = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
    const mailtoLink = `mailto:ali.tariq.grewal@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.location.href = mailtoLink;

    this.reset();
});