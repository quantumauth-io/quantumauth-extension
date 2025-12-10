document.addEventListener("DOMContentLoaded", () => {
    const dot = document.getElementById("dot");
    const statusText = document.getElementById("status-text");
    const details = document.getElementById("details");
    const launchBtn = document.getElementById("launch");

    async function checkStatus() {
        try {
            const res = await fetch("http://localhost:6137/healthz", { method: "GET" });
            if (res.ok) {
                dot.classList.remove("err");
                dot.classList.add("ok");
                statusText.textContent = "Client is running";
                details.textContent = "QuantumAuth client responded successfully.";
            } else {
                dot.classList.remove("ok");
                dot.classList.add("err");
                statusText.textContent = "Client is not responding";
                details.textContent = `HTTP ${res.status}`;
            }
        } catch (err) {
            dot.classList.remove("ok");
            dot.classList.add("err");
            statusText.textContent = "Client not reachable";
            details.textContent = String(err);
        }
    }

    // auto-check when popup opens
    checkStatus();

    // launch client via custom protocol
    launchBtn.addEventListener("click", () => {
        window.location.href = "qa://start";
    });
});
