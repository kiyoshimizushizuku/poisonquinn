function toggleDetails(id) {
    var element = document.getElementById(id);
    element.classList.toggle("active");
}

function openModal() {
    document.getElementById("modal-overlay").classList.add("active");
}

function closeModalDirect() {
    document.getElementById("modal-overlay").classList.remove("active");
}

function closeModal(event) {
    if (event.target.id === "modal-overlay") {
        document.getElementById("modal-overlay").classList.remove("active");
    }
}

// WhatsApp Messaging Logic
function sendToWhatsApp() {
    var name = document.getElementById("sender-name").value.trim();
    var message = document.getElementById("sender-msg").value.trim();
    var phone = "8801746995491";

    if (!name || !message) {
        alert("Please fill in both your Name and Message.");
        return;
    }

    var text = "Hi Zaara,%0A%0AMy Name: " + encodeURIComponent(name) + "%0AMessage: " + encodeURIComponent(message);
    var url = "https://wa.me/" + phone + "?text=" + text;
    window.open(url, "_blank");
}

// Direct Phone SMS Messaging Logic
function sendToSMS() {
    var name = document.getElementById("sender-name").value.trim();
    var message = document.getElementById("sender-msg").value.trim();
    var phone = "+8801746995491";

    if (!name || !message) {
        alert("Please fill in both your Name and Message.");
        return;
    }

    var body = "Hi Zaara, My Name: " + name + " | Message: " + message;
    var url = "sms:" + phone + "?body=" + encodeURIComponent(body);
    window.location.href = url;
}