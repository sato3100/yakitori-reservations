document.addEventListener("DOMContentLoaded", function() {
    const nextButton = document.getElementById("next");

    nextButton.addEventListener("click", function() {
        const momoTare = parseInt(document.getElementById("momoTare").value) || 0;
        const momoShio = parseInt(document.getElementById("momoShio").value) || 0;
        const negimaTare = parseInt(document.getElementById("negimaTare").value) || 0;
        const negimaShio = parseInt(document.getElementById("negimaShio").value) || 0;
        const tukuneTare = parseInt(document.getElementById("tukuneTare").value) || 0;
        const pickupTime = document.getElementById("pickupTime").value;

        sessionStorage.setItem('momoTare', momoTare);
        sessionStorage.setItem('momoShio', momoShio);
        sessionStorage.setItem('negimaTare', negimaTare);
        sessionStorage.setItem('negimaShio', negimaShio);
        sessionStorage.setItem('tukuneTare', tukuneTare);
        sessionStorage.setItem('pickupTime', pickupTime);

        window.location.href = "reception.html";
    });
});
