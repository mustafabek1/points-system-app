# Points System App

This project is a simple web application built with Next.js, TypeScript, and Tailwind CSS. It features a cart component that displays points fetched from an API and allows users to utilize those points through a user-friendly interface.

## Features

- Allows users to input the number of points they wish to use.
- Submits the points to a POST endpoint for processing.
- Responsive design using Tailwind CSS.

## Project Structure

```
points-System-app
├── public
│   └── favicon.ico
├── src
│   ├── components
│   │   └── Cart.tsx
│   ├── pages
│   │   ├── api
│   │   │   └── points.ts
│   │   └── index.tsx
│   ├── styles
│   │   └── globals.css
│   ├── utils
│   │   └── api.ts
│   └── types
│       └── index.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/mustafabek1/points-system-app.git
   ```

2. Navigate to the project directory:
   ```
   cd points-System-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To start the development server, run:
```
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- The main page displays the current points available.
- Click the button to open an input field where you can enter the number of points you wish to use.
- Upon submission, the points will be sent to the server for processing.

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- React

## License

This project is licensed under the MIT License. See the LICENSE file for details.