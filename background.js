// noinspection JSDeprecatedSymbols
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (!message || message.type !== "QUANTUMAUTH_REQUEST") return;

    fetch("http://127.0.0.1:6137/extension/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(message.payload || {})
    })
        .then(async (res) => {
            const text = await res.text();
            console.log("[QA extension] /extension/auth status", res.status, text);
            let data;
            try {
                data = text ? JSON.parse(text) : null;
            } catch (e) {
                data = { raw: text };
            }

            sendResponse({
                ok: res.ok,
                status: res.status,
                data
            });
        })
        .catch((err) => {
            sendResponse({
                ok: false,
                error: err?.toString() || "unknown error"
            });
        });

    // Keep the message channel open for async response
    return true;
});
