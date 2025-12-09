// Listen for messages from the web page
window.addEventListener("message", (event) => {
    if (event.source !== window) return;

    const msg = event.data;
    if (!msg || msg.type !== "QUANTUMAUTH_REQUEST") return;

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
