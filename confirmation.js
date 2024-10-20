document.addEventListener("DOMContentLoaded", function() {
    const summary = document.getElementById("order-summary");

    // sessionStorageからデータを取得
    const setAmount = sessionStorage.getItem('setAmount') || 0;
    const pieces = sessionStorage.getItem('pieces') || 0;
    const momoTare = sessionStorage.getItem('momoTare') || 0;
    const momoShio = sessionStorage.getItem('momoShio') || 0;
    const negimaTare = sessionStorage.getItem('negimaTare') || 0;
    const negimaShio = sessionStorage.getItem('negimaShio') || 0;
    const tukuneTare = sessionStorage.getItem('tukuneTare') || 0;
    const pickupTime = sessionStorage.getItem('pickupTime') || "未設定";

    // 注文内容を表示
    let summaryHTML = `
        <p><strong>合計金額：</strong> ${setAmount} 円</p>
        <p><strong>合計本数：</strong> ${pieces} 本</p>
    `;

    if (momoTare > 0) {
        summaryHTML += `<p>（ももタレ： ${momoTare}本）</p>`;
    }
    if (momoShio > 0) {
        summaryHTML += `<p>（もも塩： ${momoShio}本）</p>`;
    }
    if (negimaTare > 0) {
        summaryHTML += `<p>（ねぎまタレ： ${negimaTare}本）</p>`;
    }
    if (negimaShio > 0) {
        summaryHTML += `<p>（ねぎま塩： ${negimaShio}本）</p>`;
    }
    if (tukuneTare > 0) {
        summaryHTML += `<p>（つくねタレ： ${tukuneTare}本）</p>`;
    }

    summaryHTML += `<p><strong>受け取り時間：</strong> ${pickupTime}</p>`;
    summary.innerHTML = summaryHTML;
});
