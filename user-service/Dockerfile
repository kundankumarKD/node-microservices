FROM node:18
WORKDIR /app
COPY user-service/ .
COPY shared/ ./shared/
RUN npm install
EXPOSE 3002
CMD ["npm", "start"]
