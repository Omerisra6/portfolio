<h1 align="center">
  <br>
  <a href="https://omer-israeli.com/"><img src="https://i.postimg.cc/cJ4Gz1Pc/logo-o-right.png" alt="Portfolio Logo" width="200"></a>
  <br>
  <a href="https://omer-israeli.com/">Portfolio</a>
  <br>
</h1>

<h4 align="center">My Portfolio built with <a href="https://react.dev/" target="_blank">React</a>.</h4>
<p align="center"></p>
<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#credits">Credits</a> •
</p>
<h2 align="center">
  Screenshots
  <br>
  <br>
  <a href="https://omer-israeli.com/"><img src="https://i.postimg.cc/MHJRWL7d/Screenshot-121.png" alt="Screenshot-100" border="0" /></a>
  <br>
  <a href="https://omer-israeli.com/"><img src="https://i.postimg.cc/0ydhs6Sw/Capture.png" alt="Screenshot-100" border="0" /></a>
  <br>
  <a href="https://omer-israeli.com/"><img src="https://i.postimg.cc/vB3XDbm3/Portfolio.png" alt="Screenshot-100" border="0" height="400">
</h2>


## Key Features

* Responsive design 
  - The app is optimized for desktop and mobile devices, ensuring a smooth experience for all users.
* Customizable
  - The app can be easily customized using simple json file.
* Project previews
  - The app showcases projects with attractive previews.
* Contact form
  - Users can easily get in touch through a contact form.
* User-friendly interface
* Error handling

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/Omerisra6/portfolio

# Install dependencies
$ npm install
```

Create an .env file in the root of your project and add your EmailJS credentials.
<br>
```bash
REACT_APP_EMAIL_PUBLIC=YOUR_EMAIL_PUBLIC_KEY
REACT_APP_EMAIL_TEMPLATE=YOUR_EMAIL_TEMPLATE_KEY
REACT_APP_EMAIL_SERVICE=YOUR_EMAIL_SERVICE_KEY
```

Modify the `app.json` file located in the `src/assets`, example:
```json
{
  "fullName": "Omer Israeli",
  "email": "omerisraeli6@gmail.com",
  "phone": { "global": "972549063651", "display": "0549063651" },
  "links": { 
    "resume": "https://drive.google.com/file/d/1KTHzE_aEjRa1y1EC5zLQg_w2Idz3Qjj4/view?usp=sharing",
    "github": "https://github.com/Omerisra6",
    "linkedin": "https://www.linkedin.com/in/omer-israeli6/"
  },
  "projects": 
  [
    {
      "name": "Laravel Landing Pages Creator",
      "demoLink": "https://cleanregi.com",
      "logo": "https://cdn-icons-png.flaticon.com/512/5681/5681697.png",
      "screenshots": [
        "https://i.postimg.cc/DZq5Lp7t/Clean-Regi2.png",
        "https://i.postimg.cc/TYQ7tsnx/Clean-Regi1.png",
        "https://i.postimg.cc/y8bfHSfr/Clean-Regi3.png",
        "https://i.postimg.cc/B6WM8ffT/Clean-Regi4.png",
        "https://i.postimg.cc/5tQsNNT9/Clean-Regi5.png"
      ],
      "description": "Landing Pages Creator is a powerful Laravel-based platform designed to streamline the process of building landing pages for event registration.\n\nWith its user-friendly interface and efficient features, users can create customized landing pages in a matter of minutes.\n\nOne of the standout features of Landing Pages Creator is its speed. The platform is optimized to deliver fast loading times, ensuring that potential attendees have a seamless experience when accessing landing pages.\n\nCustomizability is another key aspect of Landing Pages Creator. Users have full control over the colors used on their landing pages, allowing them to match the branding and aesthetics of their events. The drag and drop interface enables easy construction of pages using a library of pre-prepared questions, providing a smooth and intuitive user experience.\n\nTo manage the number of attendees, Landing Pages Creator allows users to set a maximum guest limit. Additionally, there is an option to import a guest list via an Excel file. This feature ensures that only individuals included in the list can register for the event, providing precise control over attendance.\n\nFor more complex event registrations, the platform supports nested questions. This means that certain questions can be dependent on the answers to previous questions, allowing for a dynamic and tailored registration experience.\n\nAll past projects are conveniently accessible from the user's dashboard, where they can view and manage them. The final guests list can be downloaded directly from the dashboard, ensuring all necessary information is readily available.\n\nLanding Pages Creator supports both English and Hebrew languages, catering to a wider audience. The responsive design ensures that the landing pages adapt to different screen sizes and devices, providing a consistent and user-friendly experience across platforms.\n\nTo ensure security, all user registrations include email validation. This verification step adds an extra layer of protection and safeguards the integrity of the event registration process.",
      "pinned": true
    },
    {
      "name": "PHP Login System",
      "demoLink": "https://omerisra6-login-system.onrender.com",
      "repo": "https://github.com/Omerisra6/login-system-php",
      "logo": "https://cdn-icons-png.flaticon.com/512/10625/10625351.png",
      "screenshots": [
        "https://i.postimg.cc/LsBYZDvb/Screen-Shot-2023-06-04-at-18-10-02.png",
        "https://i.postimg.cc/PqzhMFg1/Screen-Shot-2023-06-04-at-18-00-29.png",
        "https://i.postimg.cc/vmdbfdNQ/Screen-Shot-2023-06-04-at-18-00-46.png"
      ],
      "description": "Login System App is a PHP-based application that provides a secure and user-friendly login system. It offers various features and functionalities to ensure smooth user authentication and management.\n\nThe app is designed with Docker compatibility, allowing for easy deployment and containerization. Testing and debugging are integral parts of the development process, ensuring that the app functions as expected.\n\nWith its responsive design, Login System App delivers a seamless experience across desktop and mobile devices. The user interface is designed to be intuitive and user-friendly, providing a smooth login process.\n\nUser data is stored in a CSV database, enabling easy management and portability. The app also offers live user tracking, providing real-time information on logged-in users. This feature offers insights into user activity and enhances system monitoring.\n\nLogin System App provides detailed user information, including IP addresses, operating systems, login counts, last update time, and registration time. This data can be valuable for user analysis and system administration.\n\nThe app effectively handles user sessions, ensuring secure access and seamless navigation throughout the application. Error handling is implemented to enhance the app's reliability and user experience.\n\nTo use the Login System App, Git, PHP, and Docker need to be installed on the local computer. The app can be cloned from the GitHub repository and run using Docker commands.\n\nThe software utilizes open-source packages such as PHP, Docker, and Pest.",
      "pinned": true
    },
    {
      "name": "React & Express Video Chat",
      "demoLink": "https://omerisra6-video-chat.onrender.com",
      "repo": "https://github.com/Omerisra6/video-chat-nodejs",
      "logo": "https://cdn-icons-png.flaticon.com/512/4575/4575980.png",
      "screenshots": [
        "https://i.postimg.cc/VvTpBj4x/Screen-Shot-2023-06-04-at-18-18-56.png",
        "https://i.postimg.cc/pXhgV6LR/Screen-Shot-2023-06-04-at-18-18-34.png"
      ],
      "description": "The Video Chat App is a web application built with React and Node.js that enables users to engage in real-time video chat sessions. The app provides a user-friendly interface and is optimized for both desktop and mobile devices, ensuring a smooth experience for all users.\n\nParticipants can join group video chat sessions, allowing multiple users to interact simultaneously. To ensure privacy and security, access to chat rooms is restricted to users with the room PIN. The app includes testing and debugging features to ensure its proper functionality, as well as error handling capabilities to inform users of any issues that may occur.\n\nIt utilizes WebRTC technology, specifically the PeerJS library, for real-time audio and video communication between users. WebSocket communication is implemented for efficient management of rooms and users.\n\nThe app relies on open source packages such as React, Node.js, PeerJS, and Socket.IO.\n\n",
      "pinned": false
    },
  ]
}
```

Run the following command:
```bash
# Run the app
$ npm start
```

## Credits

This software uses the following open source packages:

- [React](https://react.dev/)
- [Node.js](https://nodejs.org/)
- [EmailJS](https://www.emailjs.com/)


> GitHub [@omerisra6](https://github.com/Omerisra6) &nbsp;&middot;&nbsp;
> Linkedin [@omerisraeli](https://www.linkedin.com/in/omer-israeli6/)

