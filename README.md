# My Portfolio App

This project is a web application that showcases a portfolio using a React and TypeScript frontend and a Python backend. The application is structured to separate concerns between the frontend and backend, allowing for a clean and maintainable codebase.

## Project Structure

```
my-portfolio-app
├── backend
│   ├── app.py               # Main entry point for the Python backend application
│   ├── requirements.txt      # Lists dependencies for the backend
│   ├── static                # Directory for serving static files
│   └── templates             # Directory for HTML templates
├── frontend
│   ├── public
│   │   ├── index.html       # Main HTML file for the React application
│   │   └── favicon.ico      # Favicon for the web application
│   ├── src
│   │   ├── components
│   │   │   └── Header.tsx   # Header component for the application
│   │   ├── assets
│   │   │   ├── styles
│   │   │   │   └── main.css  # Main CSS styles for the frontend
│   │   │   └── images       # Directory for images used in the frontend
│   │   ├── App.tsx          # Main component of the React application
│   │   ├── index.tsx        # Entry point for the React application
│   │   └── types
│   │       └── index.ts     # TypeScript interfaces and types
│   ├── package.json         # Configuration file for npm
│   ├── tsconfig.json        # Configuration file for TypeScript
│   └── README.md            # Documentation for the frontend part of the project
└── README.md                # Documentation for the overall project
```

## Getting Started

### Prerequisites

- Node.js and npm installed for the frontend
- Python 3.x installed for the backend

### Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd my-portfolio-app
   ```

2. **Frontend Setup:**
   - Navigate to the `frontend` directory:
     ```
     cd frontend
     ```
   - Install the dependencies:
     ```
     npm install
     ```
   - Start the development server:
     ```
     npm start
     ```

3. **Backend Setup:**
   - Navigate to the `backend` directory:
     ```
     cd ../backend
     ```
   - Install the required Python packages:
     ```
     pip install -r requirements.txt
     ```
   - Run the backend application:
     ```
     python app.py
     ```

## Features

- Responsive design
- Dynamic portfolio showcasing projects
- Contact form for inquiries

## License

This project is licensed under the MIT License.