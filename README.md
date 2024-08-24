
# Mood Monitor Web-App

The Mood Monitor Web-App is a comprehensive web application designed to help users track and analyze their moods over time. This application allows users to log their daily moods, visualize mood trends, and receive insights based on their mood patterns. The app provides a user-friendly interface with secure backend support, ensuring data privacy and accuracy.



## Features

🔴Front-end

**User Interface (UI)** ➡️ A dynamic and interactive UI built with **Vue.js** and styled 
using **Tailwind CSS**. The UI is designed to be responsive and user-friendly, providing an optimal experience across various devices.

**Mood Logging** ➡️ Allows users to log their moods daily by selecting from a range of emotions and optionally adding notes for more context.

**Mood Calendar** ➡️ An integrated calendar component where users can view their mood entries for each day, with color-coded representations for different moods.

**Data Visualization** ➡️ Leverages libraries like Chart.js or Vue-ApexCharts to present mood trends and patterns through interactive charts and graphs.

**Authentication** ➡️ Implements secure user authentication with Firebase Auth or OAuth providers, such as Google or Facebook, ensuring data privacy and secure access.

**Progressive Web App (PWA)** ➡️ Built to function as a PWA, allowing users to install the app on their devices and access it offline.

🔴Back-end

**API** ➡️ A RESTful API created with Node.js and Express to handle all operations, including CRUD for mood entries, user management, and note-taking.

**Database** ➡️ Uses MongoDB or PostgreSQL to securely store user data, including mood logs, notes, and user profiles.

**Data Analysis** ➡️ Incorporates backend algorithms to analyze mood data and provide insights, such as detecting frequent mood patterns or potential triggers.

**Notifications** ➡️ Integrates with notification services (like Firebase Cloud Messaging or Twilio) to remind users to log their moods daily.

**Security** ➡️ Follows best practices for backend security, including data validation, encryption, and protection against common vulnerabilities (e.g., SQL injection, XSS).



## Tech Stack

🔴**Front-End:** Vue.js, Vue Router, Vuex (for state management), Tailwind CSS, Chart.js/Vue-ApexCharts (for data visualization)

🔴**Back-End:** Node.js, Express, MongoDB/PostgreSQL, JWT (for authentication), Firebase/Twilio (for notifications)

🔴**Tools and Libraries:** Axios (for API requests), bcrypt (for password hashing), Helmet (for security), Mongoose/Sequelize (for database modeling)
## Usage

1.Register or log in with your preferred authentication method.

2.Log your mood daily by selecting an emotion and adding optional notes.

3.View your mood history on the calendar and analyze trends with the help of charts and graphs.

4.Receive daily reminders to log your mood and explore insights provided by the app.

## Contribution

Feel free to fork this repository, create a new branch, and submit a pull request with your enhancements. All contributions are welcome!

## License

This project is licensed under the MIT License.
