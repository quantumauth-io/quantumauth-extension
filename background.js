// noinspection JSDeprecatedSymbols
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (!message || message.type !== "QUANTUMAUTH_REQUEST") {
        return; // ignore everything else
    }

    fetch("http://127.0.0.1:6137/extension/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(message.payload || {})
    })
        .then(async (res) => {
            const text = await res.text();
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

    return true; // async response
});
