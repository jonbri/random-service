FROM node
WORKDIR /code
RUN npm install
EXPOSE 3001
COPY . .
CMD ["npm", "start"]
