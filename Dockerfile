FROM nodesource/nsolid
WORKDIR /root/app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["nsolid", "server.js"]
