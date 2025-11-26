FROM node:18

# Install Chromium + dependencies (MUCH smaller)
RUN apt-get update && apt-get install -y \
    chromium \
    ca-certificates \
    fonts-liberation \
    libnss3 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libxkbcommon0 \
    libasound2 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    libgbm1 \
    libpango-1.0-0 \
    libpangocairo-1.0-0 \
    libx11-6 \
    libx11-xcb1 \
    libxext6 \
    libxfixes3 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./
RUN npm install

# Prevent Puppeteer from downloading Chrome (we use system Chromium)
ENV PUPPETEER_SKIP_DOWNLOAD=false
ENV CHROMIUM_PATH=/usr/bin/chromium


COPY . .

ENV PORT=3000
EXPOSE 3000

CMD ["node", "index.js"]
