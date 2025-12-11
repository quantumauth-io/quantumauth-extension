// noinspection JSDeprecatedSymbols
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("[QA EXT] Incoming message:", message);
    console.log("[QA EXT] From sender:", sender);

    if (!message || message.type !== "QUANTUMAUTH_REQUEST") {
        console.log("[QA EXT] Ignored non-QA message");
        return; // ignore everything else
    }

    const url = "http://127.0.0.1:6137/extension/auth";
    console.log("[QA EXT] Forwarding request to local client:", url, "payload:", message.payload);

    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(message.payload || {})
    })
        .then(async (res) => {
            console.log("[QA EXT] Response status:", res.status);

            const text = await res.text();
            console.log("[QA EXT] Raw response text:", text);

            let data;
            try {
                data = text ? JSON.parse(text) : null;
            } catch (e) {
                console.error("[QA EXT] Failed to JSON.parse:", e);
                data = { raw: text };
            }

            console.log("[QA EXT] Parsed response:", data);

            sendResponse({
                ok: res.ok,
                status: res.status,
                data
            });
        })
        .catch((err) => {
            console.error("[QA EXT] Fetch error:", err);

            sendResponse({
                ok: false,
                error: err?.toString() || "unknown error"
            });
        });

    return true; // async response
});
