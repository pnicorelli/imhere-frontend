# ImHere - Frontend

Just play around

A simple clock card machine in a Two-tier webbased software

Backend: [https://github.com/pnicorelli/imhere-backend](https://github.com/pnicorelli/imhere-backend)

Frontend: [https://github.com/pnicorelli/imhere-frontend](https://github.com/pnicorelli/imhere-frontend)


# Config

Before you build the website you need to configure some variables in ./scr/config.json

| key   | type     | description        |
|-------|----------|--------------------|
|API_URL| string   | the backend URL    |



# HowTo


First install dependencies

```shell
npm install

```

Then build all the stuff

```shell
npm run-script build

```

You can ship the `./build` directory to the http server and that's all.

In case you are developing new feature you can use

```shell
npm run-script watch
```

and just refresh the browser each time you save your changes
