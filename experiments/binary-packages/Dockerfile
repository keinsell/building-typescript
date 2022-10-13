# FROM node:8-alpine as base

# # Needed for bcrypt
# RUN apk add --no-cache make gcc g++ python
# # Get pkg packages
# RUN yarn dlx add pkg pkg-fetch

# ENV NODE node16
# ENV PLATFORM alpine
# ENV ARCH x64
# RUN pkg-fetch ${NODE} ${PLATFORM} ${ARCH}

# # Create app directory
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app

# # Install dependencies
# COPY package*.json ./
# COPY .yarn ./
# COPY yarn.lock ./
# RUN yarn --production
# # Needed in order for bcrypt to work on alpine
# # @see https://github.com/kelektiv/node.bcrypt.js/issues/528
# RUN npm rebuild bcrypt --build-from-source

# # Bundle app source
# COPY . .
# RUN cp node_modules/bcrypt/lib/binding/bcrypt_lib.node .
# RUN ls -la .

# # Build assets
# RUN pkg . --compress Brotli -o dist/pkg/ttb -d --public-packages "*"

# # --- Release with Alpine ----
# FROM node:16.13.0-alpine AS release

# # Create app directory
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app

# # Install app dependencies
# COPY --from=base /usr/src/app/dist/pkg/ttb ./
# COPY --from=base /usr/src/app/*.node ./

# # Exports
# USER node
# EXPOSE 3000
# CMD [ "./ttb" ]

FROM node:16.18.0

COPY dist/ncc .

ENTRYPOINT ["node", 'index.js']