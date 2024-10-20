document.addEventListener("DOMContentLoaded", function() {
    const summary = document.getElementById("order-summary");
    const totalPiecesEl = document.getElementById("total-pieces");
    const totalPriceEl = document.getElementById("total-price");
    const pickupTimeEl = document.getElementById("pickup-time");

    // sessionStorageからデータを取得
    const momoTare = sessionStorage.getItem('momoTare') || 0;
    const momoShio = sessionStorage.getItem('momoShio') || 0;
    const negimaTare = sessionStorage.getItem('negimaTare') || 0;
    const negimaShio = sessionStorage.getItem('negimaShio') || 0;
    const tukuneTare = sessionStorage.getItem('tukuneTare') || 0;
    const pickupTime = sessionStorage.getItem('pickupTime') || "q";

    let totalPieces = 0;
    let totalPrice = 0;

    const items = [
        { name: "ももタレ", price: 100, quantity: momoTare, img: "./images/yakitori_momo.png" },
        { name: "もも塩", price: 100, quantity: momoShio, img: "./images/yakitori_momo.png" },
        { name: "ねぎまタレ", price: 100, quantity: negimaTare, img: "./images/yakitori_negima.png" },
        { name: "ねぎま塩", price: 100, quantity: negimaShio, img: "./images/yakitori_negima.png" },
        { name: "つくねタレ", price: 100, quantity: tukuneTare, img: "./images/yakitori_tsukune.png" }
    ];

    items.forEach(item => {
        if (item.quantity > 0) {
            const itemTotal = item.price * item.quantity;
            totalPieces += parseInt(item.quantity);
            totalPrice += itemTotal;

            summary.innerHTML += `
                <div class="order-item">
                    <img src="${item.img}" alt="${item.name}">
                    <div class="item-info">
                        <p class="item-name">${item.name}</p>
                        <span class="item-price">¥${item.price} × ${item.quantity}本</span>
                    </div>
                    <span>¥${itemTotal}</span>
                </div>
            `;
        }
    });

    // 合計本数・金額・受け取り時間の表示
    totalPiecesEl.textContent = totalPieces.toLocaleString();
    totalPriceEl.textContent = `¥${totalPrice.toLocaleString()}`;
    pickupTimeEl.textContent = pickupTime;

    // 注文確定ボタンの処理
    const confirmButton = document.getElementById("confirm-order");
    confirmButton.addEventListener("click", function() {
        window.location.href = "confirmation.html";
    });
});
