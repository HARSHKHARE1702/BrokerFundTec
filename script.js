document.getElementById("login-btn").addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Mock validation (replace with real backend authentication)
    if (username === "HARSH" && password === "1234") {
        document.getElementById("login-container").classList.add("hidden");
        document.getElementById("portal-container").classList.remove("hidden");
    } else {
        alert("Invalid credentials. Please try again.");
    }
});

function showInvestorManagement() {
    document.getElementById("investor-management").classList.remove("hidden");
    document.getElementById("transaction-details").classList.add("hidden");
}

function showTransactionDetails() {
    document.getElementById("transaction-details").classList.remove("hidden");
    document.getElementById("investor-management").classList.add("hidden");
}
