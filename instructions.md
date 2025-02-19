# Technical Interview

## Vue.js Frontend - Quick Changes (Take 10 Minutes)
- [ ] Write a function to get data from the `/api/time` endpoint on the backend
- [ ] Display the data on the page, formatted to be human-readable.
- [ ] Add a new button that calls the function you wrote so that anytime the button is pressed, the display is updated.


## NginX - Pushing Changes to a Server (Take 10 Minutes)

- [ ] SSH into the server we have set up: `madramsdell@35.209.208.115`
- [ ] Build the code on the server for production.
- [ ] Copy the configuration file `config.cfg` onto the server into the home directory.
- [ ] Pretend that you have made a change to the nginx configuration in `/etc/nginx`. 
    How would you apply the changes to the running server?
- [ ] Questions


## Chartjs - Backend Route Creation (Take 10 Minutes)
We want to build an endpoint to get data for display in chartjs. Your job is to create the backend endpoint which will
send the data to the frontend.

- [ ] Create a GET endpoint at `/api/visualization/data`.
- [ ] Return the `austrianGDP` array as a JSON response object.
- [ ] If necessary, implement error handling. If it is unnecessary, express why you feel it is unnecessary in this case.
- [ ] **Bonus**: using the already installed chart.js library, transform the received data and display it using a line chart.
