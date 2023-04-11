# ReactJS-Gym

![image](https://user-images.githubusercontent.com/57111980/231161350-f6f0b141-46ac-47ea-968f-3fb66d3109c8.png)

# Building and Deploying a Modern React 18 Fitness Exercises App

This is a project built with ReactJS and makes use of the RapidAPI platform to provide a seamless experience to users. The app is designed to help individuals keep track of their fitness routines by providing access to an extensive collection of exercises complete with detailed descriptions, videos and images.

The app is built with React 18, the latest version of the React framework, which provides an advanced set of features to improve performance, stability and developer productivity. This ensures that the app is both efficient and user-friendly.

With RapidAPI, developers can easily integrate third-party API services into their applications, making it possible to extend the functionality of the app without the need to build everything from scratch. This allows users to access information from a variety of sources, including social media, weather data, images and videos, among others.

The modern React 18 Fitness Exercises App is easy to use, with an intuitive interface that makes it easy to learn and navigate. Additionally, the app is optimized for mobile devices, making it convenient for users to access information on the go.

Overall, the modern React 18 Fitness Exercises App is a powerful tool that utilizes the latest technologies to provide a seamless user experience. It is an excellent example of how ReactJS and RapidAPI can be used to create cutting-edge web applications that meet the needs and expectations of modern users.

## Introduction

This project is a web application for fitness enthusiasts that allows users to find various exercises and workouts, create their own routines, and keep track of their progress. The app uses ReactJS and is integrated with RapidAPI to fetch exercises data. 

## Features

The app includes the following features:

* Search for exercises based on muscle groups, equipment, and difficulty levels.
* View details of exercises, including name, descriptions, and images.
* Create workout routines by selecting multiple exercises and assigning sets, reps, and rest periods.
* Track workouts by marking them as complete and adding progress notes.
* View and edit workout history and progress.
  
## Installation & Setup

To run the app locally, follow these instructions:

1. Clone the repository to your local machine: `git clone https://github.com/CodeKaito/ReactJS-Gym`.
2. Navigate to the project directory: `cd ReactJS-Gym`.
3. Install dependencies: `npm install`.
4. Start the app: `npm start`. This will launch the app in development mode on `http://localhost:3000/`.

## Deployment

To deploy the app to a hosting platform, follow these steps:

1. Create a production build of the app: `npm run build`.
2. Upload the contents of the `build` folder to your hosting server.
3. Configure your hosting platform to serve the app through the built `index.html` file.

## RapidAPI Integration

The app uses the Workout Tracker API from RapidAPI to fetch exercise data. To use this API, you will need to create a free account on RapidAPI and obtain an API key. 

1. Go to the Workout Tracker API page on RapidAPI.
2. Click on the "Subscribe" button and choose a pricing plan that suits your needs.
3. Obtain your API key from the "Dashboard" tab on your RapidAPI account.
4. Create a `.env` file in the root directory of the project and add the following line: `REACT_APP_API_KEY=your_api_key_here`.
5. Restart the app (`npm start`) and the app will now be integrated with the Workout Tracker API.

## Dependencies

The app uses the following dependencies:

* axios
* moment
* react
* react-dom
* react-router-dom
* react-scripts
* styled-components

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT license](https://choosealicense.com/licenses/mit/).
