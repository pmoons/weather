[![CircleCI](https://circleci.com/gh/pmoons/weather.svg?style=svg)](https://circleci.com/gh/pmoons/weather)

# Weather

A weather app for interviewing purposes.

## Getting Started

1. Install node LTS (12.16.1) and place in `PATH`
2. Install `yarn`: `npm install -g yarn`
3. Clone project
4. `cd weather/`
5. `yarn install`
6. Create a `.env` file with the following text:

- ```
  DARK_SKY_API_KEY=[GET VALUE FROM ME]
  ```
- Contact maintainer of repo to get API key, or sign up for a key yourself at [Dark Sky](https://darksky.net/dev/register)

## Running Development Environment

`yarn start`

## Running Storybook Environment

`yarn storybook`

## Troubleshooting

- If you are receiving this error:

```
Error: ENOENT: no such file or directory, scandir '/Users/user/Workspaces/weather/node_modules/node-sass/vendor'
```

try running `npm rebuild node-sass` [Issue](https://github.com/sass/node-sass/issues/1812)

## How To Use
- Run the dev environment
- Click the location arrow thingy in the header
- Accept GPS location tracking
- See your weather appear (Woo!)

### Credits

Weather SVG icons provided under Creative Commons Attribution 4.0 IPL via [AMCharts](https://www.amcharts.com/free-animated-svg-weather-icons/)
