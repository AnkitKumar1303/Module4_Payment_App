function simulatePayment() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate a successful payment
            const success = Math.random() < 0.5;
            if (success) {
                resolve("Payment completed successfully!");
            } else {
                reject("Payment failed. Please try again.");
            }
        }, 3000); // Simulate payment for 3 seconds
    });
}

// Button click event to initiate payment
document.getElementById("start-payment").addEventListener("click", () => {
    const paymentUI = document.getElementById("payment-ui");
    const startButton = document.getElementById("start-payment");

    startButton.disabled = true;
    paymentUI.style.display = "block";

    simulatePayment()
        .then((message) => {
            paymentUI.innerHTML = `
                <h2>Payment Successful</h2>
                <p>${message}</p>
            `;
        })
        .catch((error) => {
            paymentUI.innerHTML = `
                <h2>Payment Failed</h2>
                <p>${error}</p>
            `;
        })
        .finally(() => {
            startButton.disabled = false;
        });
});