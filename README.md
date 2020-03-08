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

## Troubleshooting
- If you are receiving this error:
```
Error: ENOENT: no such file or directory, scandir '/Users/user/Workspaces/weather/node_modules/node-sass/vendor'
```
try running `npm rebuild node-sass` [Issue](https://github.com/sass/node-sass/issues/1812)
