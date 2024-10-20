document.addEventListener("DOMContentLoaded", function() {
    const nextButton1 = document.getElementById("next");

    nextButton1.addEventListener("click", function() {
        const setNumber = document.getElementById("set-number").value;
        const setQuantity = parseInt(document.getElementById("set-quantity").value) || 1;
        const pieces = setNumber * setQuantity;
        const setAmount = pieces * 100;

        sessionStorage.setItem('setNumber', setNumber);
        sessionStorage.setItem('setQuantity', setQuantity);
        sessionStorage.setItem('pieces', pieces);
        sessionStorage.setItem('setAmount', setAmount);

        if (pieces <= 20) {
            window.location.href = "select.html";
        } else {
            alert("注文できるのは20本までです。");
        }
    });
});
