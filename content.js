window.addEventListener("message", (event) => {
    if (event.source !== window) return;

    const msg = event.data;
    if (!msg || msg.type !== "QUANTUMAUTH_REQUEST") return;

    if (!chrome.runtime || !chrome.runtime.sendMessage) {
        window.postMessage(
            {
                type: "QUANTUMAUTH_RESPONSE",
                correlationId: msg.correlationId,
                payload: null,
                error: "QuantumAuth extension runtime not available"
            },
            "*"
        );
        return;
    }

    chrome.runtime.sendMessage(msg, (response) => {
        const err =
            chrome.runtime.lastError?.message ||
            response?.error ||
            null;

        window.postMessage(
            {
                type: "QUANTUMAUTH_RESPONSE",
                correlationId: msg.correlationId,
                payload: response,
                error: err
            },
            "*"
        );
    });
});
