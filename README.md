# Weather web app

DEMO: [advertio-weather-app-sigma.vercel.app](https://advertio-weather-app-sigma.vercel.app/)

## Main Features
- Get weather data using OpenWeather API
- Show 3 cities weather (Lisbon, New York and London)
- Switch toggle for celsius and fahrenheit


## Technologies
- React
- TypeScript
- Styled-components
- Storybook
- Jest
- React Testing Library
- SWR
- Vercel

## Tools for development
- CommitLint
- ESLint
- Prettier
- Husky

## Local setup

1. Install libraries
```
npm install
```

2. Place `.env.local` file on the root directory which has your OpenWeahter API Key
```
REACT_APP_WEATHER_API_KEY=YOUR_API_KEY_HERE
```

3. Run dev server
```
npm start
```

*Storybook
```
npm run storybook
```


## Project structure

```
/src
  /components
    /COMPONENT_NAME
      /index.tsx
      /styles.ts
      /COMPONENT_NAME.stories.tsx
      /COMPONENT_NAME.test.tsx
  /styles - theme and glbal styles
  /types - Type definition for the open weaher API
  
```

## Unit tests x Storybook
I wrote stories for each component before adding unit tests to make use of story components for unit tests. For example, this CityDropDown has some stories with `.play` function. So that each story can have userEvent already instead of writing userEvent on the test file. 
The benefit of this is that the UI can be seen more clearly than just adding tests and checking it on console. Also writing tests become easier and intuitive since most of components have already defined in storybook.

<img width="1466" alt="Screen Shot 2022-08-23 at 3 45 41 AM" src="https://user-images.githubusercontent.com/43656115/186140365-6f45e0a5-8ed6-487f-89a5-4d7b84e8f1cd.png">

<img width="1325" alt="Screen Shot 2022-08-23 at 3 46 56 AM" src="https://user-images.githubusercontent.com/43656115/186140374-75de5452-aa99-4b31-b95e-a77140ca6ef0.png">

<img width="1549" alt="Screen Shot 2022-08-23 at 3 53 46 AM" src="https://user-images.githubusercontent.com/43656115/186140736-fa1cd817-00db-4a02-b1b0-d5bca93bd9c8.png">


<br/>


## Accessibility
In terms of Accessibility, I tried to check them as much as I can in unit tests by using a11y based functions such as `getByRole` or `getByAltText`. And also I tried to avoid adding `data-testid` because it's not good for a11y checking.
Since some of components are using diffrent HTML tags rather than the correct HTML tag due to styling, I added `aria-label`, `role` attributes to the components and made them accessible.

<img width="767" alt="Screen Shot 2022-08-23 at 3 57 03 AM" src="https://user-images.githubusercontent.com/43656115/186142109-a2b8a0cb-1bb2-4a6b-abbe-3ddb5a090f97.png">

<img width="643" alt="Screen Shot 2022-08-23 at 3 56 49 AM" src="https://user-images.githubusercontent.com/43656115/186142123-d7e8f586-bec4-40c3-b86e-822941f8c9b3.png">



<br/>



## More improvements to do
- Stories and unit tests for Home component with Mock Service Worker
- Intergration testing using Cypress
