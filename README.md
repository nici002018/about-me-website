# ❓ about-me-website
is a simple self-hosted about me website

![image](https://github.com/nici002018/about-me-website/assets/105665457/c737e349-1a2e-4dc0-b954-2cec117a4dc0)

# 🔎 Live Demo
https://niceas.gnhub.de

# 🔧 How to Install 

the default port is 6765 but you can easily change it in index.js.

the normal address: http://localhost:6765

Requirements:

- [Node.js](https://nodejs.org/en/download/) 14 / 16 / 18 / 20.4
- [npm](https://docs.npmjs.com/cli/) 9
- [Git](https://git-scm.com/downloads)
- [pm2](https://pm2.keymetrics.io/) - For running in background

```bash
git clone https://github.com/nici002018/about-me-website.git
cd about-me-website
npm run start

# Option 1.
node index.js

# Option 2.
npm install pm2 -g && pm2 install pm2-logrotate

# Start Server
pm2 start index.js --name about-me-website
```
