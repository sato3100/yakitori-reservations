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

        const pieces = momoTare + momoShio + negimaTare + negimaShio + tukuneTare;
        const storedPieces = parseInt(sessionStorage.getItem('pieces')) || 0;
        const errorMessage = document.getElementById("error-message");

        if (pieces !== storedPieces) {
            errorMessage.innerText = "注文の合計数が正しくありません。もう一度入力してください。";
            return;
        }

        window.location.href = "reception.html";
    });
});
