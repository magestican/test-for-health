# test-for-health

To use this solution, these are main instructions :

Install Node.JS

Once that is done, open the terminal on the root folder of this project, and do :

-- npm install

When the installation finishes, to run the server you need to run :

-- npm run start-server  (if you want to configure your dark sky token, check this command on the package.json file)

To compile/develop the client, you will need either of these commands:

-- npm run build-client

-- npm run watch-client



# REQUIREMENTS



The task: create a dashboard with weather widgets, similar to Apple's dashboard:

Inline image 1

We expect you to create two elements:

- A data server that fetches data from DarkSky (https://darksky.net/dev/) and provides the average temperature (derived from the hourly temperatures), humidity and pressure for the day. All temperatures should be provided in celsius.

- A web-app that displays several weather widgets for different locations, including:

Sydney (-33.8700308, 151.2116687)
New York (40.705311, -74.2581855)
London (51.5285582, -0.2416806)

Each widget should show the temperature details provided by the server, e.g. temp, humidity and pressure.

Extensions, in no specific order:

- Make it possible to add a new widget for a selectable country.
- Make it possible to drag the widgets around.
- Save and restore the state of the app when refreshing, so it resumes in the same state.
- Add an animation where the use can flip the widget over to edit the chosen city.
- Add a chart to each widget showing the hourly temperatures. We recommend using D3.
