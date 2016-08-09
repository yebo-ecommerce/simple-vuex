FROM node
RUN npm install -g vue-cli
EXPOSE 8080
CMD npm run dev
