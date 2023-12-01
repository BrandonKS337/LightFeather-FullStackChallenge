FROM node:19-alpine 
# Tells docker the os
WORKDIR /app
# typically app
COPY . .
# copies all code to working directory ignoring dockerignore
EXPOSE 5173
# exposes chosen internal ports, in our case 8080
RUN npm install
# tells program to install this before use, aka what dependencies do users need to run the app

CMD ["npm", "start"]
# how app knows what to run to start