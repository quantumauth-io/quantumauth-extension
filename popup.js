function setStatus(kind, text, details) {
    const dot = document.getElementById("dot");
    const statusText = document.getElementById("status-text");
    const detailsEl = document.getElementById("details");

    dot.classList.remove("ok", "err");
    if (kind === "ok") dot.classList.add("ok");
    if (kind === "err") dot.classList.add("err");

    statusText.textContent = text;
    detailsEl.textContent = details || "";
}

function pingClient() {
    setStatus("neutral", "Checking status…", "");

    chrome.runtime.sendMessage(
        {
            type: "QUANTUMAUTH_REQUEST",
            payload: { action: "ping" }
        },
        (response) => {
            const err =
                chrome.runtime.lastError?.message ||
                response?.error ||
                null;

            if (err || response?.ok === false) {
                setStatus(
                    "err",
                    "Client is NOT running",
                    err || "No response from QuantumAuth client",
                );
                return;
            }

            setStatus(
                "ok",
                "Client is running",
                "QuantumAuth client responded successfully.",
            );
        },
    );
}

document.getElementById("refresh").addEventListener("click", pingClient);
document.addEventListener("DOMContentLoaded", pingClient);
