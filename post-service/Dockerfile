FROM node:18
WORKDIR /app
COPY post-service/ .
COPY shared/ ./shared/
RUN npm install
EXPOSE 3001
CMD ["npm", "start"]
