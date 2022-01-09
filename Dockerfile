FROM node:16.13.0

COPY dist/ncc .

CMD ["node", "index.js"]