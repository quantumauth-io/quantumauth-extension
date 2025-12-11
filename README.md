# 🛡️ QuantumAuth Connector – Browser Extension

**QuantumAuth Connector** is the official browser extension that enables secure communication between your web browser and the locally installed **QuantumAuth Client**.

This extension allows websites using the QuantumAuth Web SDK to request hardware-backed cryptographic signatures from your device without ever exposing private keys.

---

## 🚀 Features

- 🔐 **Hardware-backed authentication**  
  Uses TPM, Secure Enclave, or supported hardware to sign authentication challenges.

- ⚡ **Instant cryptographic signing**  
  Enables your browser to approve login requests from the QuantumAuth Client.

- 🛡️ **Phishing-resistant**  
  No passwords, no OTPs, no shared secrets — all keys stay inside your device.

- 🌐 **Seamless integration with the QuantumAuth ecosystem**  
  Required for web apps built with the QuantumAuth Web SDK.

- 🧩 **Lightweight & Privacy-Friendly**  
  No tracking, no analytics, and no external calls.  
  The extension only communicates with your **local** QuantumAuth Client.

---

## 📦 Installation

### 🔹 From the Chrome Web Store  
(Insert link once published)

### 🔹 Developer Installation (Manual)

1. Clone the repository:
```bash
git clone https://github.com/quantumauth-io/quantum-auth-extension.git
```

2. Open Chrome and go to:
```
chrome://extensions
```

3. Enable **Developer Mode** (top right corner).

4. Click **Load unpacked** and select the `extension/` folder.

---

## 🧩 How It Works

The extension acts as a secure communication bridge:

```
Browser  ⇆  QuantumAuth Extension  ⇆  Local QuantumAuth Client  ⇆  TPM / Enclave
```

It forwards signing and authentication requests that originate from websites using the QuantumAuth SDK.  
All private keys remain safely inside hardware — never accessible to JavaScript, the browser, or external servers.


---

### Developer console  
If you are using the Web SDK, open DevTools → Console and check for QuantumAuth messages.

### Troubleshooting  
If you are experiencing issues,

👉 https://github.com/quantumauth-io/quantum-auth/issues

---

## 🔐 Permissions

This extension uses the minimal permission required:

- `nativeMessaging`

This is necessary to communicate securely with the QuantumAuth Client running on your device.

**No personal data is collected, stored, or transmitted.**

---

## 📄 Privacy

QuantumAuth Connector does **not**:

❌ Collect personal data  
❌ Share data with third parties  
❌ Track users  
❌ Send data to external servers  

It only communicates with the **local** QuantumAuth Client.

A full Privacy Manifest is included in the extension package.

---

## 🤝 Contributing

We welcome pull requests that:

- Improve stability  
- Expand browser compatibility  
- Add developer tooling  
- Enhance documentation  

For major changes, please open an issue to discuss it first.

---

## 🐞 Issue Reporting

Use the GitHub Issue Templates for:

- 🐛 Bug Reports  
- 🌟 Feature Requests  
- ❓ Questions  

👉 https://github.com/quantumauth-io/quantum-auth/issues

---

## 📜 License

This extension is part of the **QuantumAuth** open-source ecosystem.  
Licensed under the Apache 2.0 License.
