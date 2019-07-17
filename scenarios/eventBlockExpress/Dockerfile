# Dockerfile

FROM nodesource/nsolid

COPY server.js /server.js
COPY package.json package.json
COPY package-lock.json package-lock.json

EXPOSE 8888

RUN npm ci

CMD ["nsolid", "/server.js"]
