# **PAJ Project**

![GitHub repo size](https://img.shields.io/github/repo-size/eckysaroyd/paj-project)
![GitHub contributors](https://img.shields.io/github/contributors/eckysaroyd/paj-project)
![GitHub stars](https://img.shields.io/github/stars/eckysaroyd/paj-project?style=social)
![GitHub forks](https://img.shields.io/github/forks/eckysaroyd/paj-project?style=social)

## **Table of Contents**

- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Usage](#usage)
- [Images](#images)
- [Contact](#contact)

---

## **About the Project**

The **PAJ Project** is a dual-application system designed for efficient tracking and monitoring. It comprises:

- **Frontend**: An Ionic-based mobile application for cross-platform use.
- **Backend**: A Laravel-based API server for managing data and handling business logic.

This setup offers a seamless user experience for data visualization and tracking purposes.

---

## **Features**

- **Cross-Platform Frontend**: Responsive design built with Ionic for Android and iOS devices.
- **Robust Backend**: Developed using Laravel to provide secure and efficient APIs.
- **Real-Time Tracking**: Integration with location tracking services to visualize data on maps.
- **Scalable Architecture**: Designed to accommodate future feature enhancements and scaling needs.

---

## **Technologies Used**

- **Frontend**: Ionic, Angular
- **Backend**: Laravel (PHP)
- **Database**: MySQL (or any other supported by Laravel)
- **API Integration**: RESTful API
- **Version Control**: Git, GitHub
- **Deployment**: Vercel

---

## **Project Structure**

```
paj-project/
│
├── paj-tracking/         # Your Ionic (frontend) app
│   ├── src/              # Source code
│   ├── node_modules/     # Node.js dependencies
│   ├── package.json      # Project dependencies and scripts
│   ├── ...
│   └── README.md         # Frontend-specific README
│
└── paj-tracking-app/     # Your Laravel (backend) app
    ├── app/              # Application logic
    ├── public/           # Public files (entry point)
    ├── routes/           # API and web routes
    ├── composer.json     # PHP dependencies
    ├── ...
    └── README.md         # Backend-specific README
```

---

## **Getting Started**

Follow these steps to set up the project locally.

### **Prerequisites**

Make sure you have the following installed:

- [Node.js and npm](https://nodejs.org/)
- [Composer](https://getcomposer.org/)
- [Git](https://git-scm.com/)

---

### **Installation**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/eckysaroyd/paj-project.git
   cd paj-project
   ```

2. **Set up the backend**:
   ```bash
   cd paj-tracking-app
   composer install
   cp .env.example .env
   php artisan key:generate
   ```

3. **Set up the frontend**:
   ```bash
   cd ../paj-tracking
   npm install
   ```

---

### **Running the Project**

- **Backend (Laravel):**
  ```bash
  cd paj-tracking-app
  php artisan serve
  ```
  The backend will be available at `http://127.0.0.1:8000`.

- **Frontend (Ionic):**
  ```bash
  cd paj-tracking
  ionic serve
  ```
  The frontend will be available at `http://localhost:8100`.

---

## **Usage**

1. Navigate to the Ionic app in your browser or mobile device.
2. Log in using valid credentials (e.g., demo accounts if configured).
3. View and manage tracked devices in real time.


## **Images **

- ![image](https://github.com/user-attachments/assets/1c372c19-b73e-4b30-a368-594f04987882)
- ![image](https://github.com/user-attachments/assets/2e2a6177-77d2-4bbf-8db7-e36aa44d8709)
- ![image](https://github.com/user-attachments/assets/e3cb4ace-61c0-458e-84ec-9c0000cc64c8)
- ![image](https://github.com/user-attachments/assets/2011d41d-8c1a-4a65-8434-7cb7de621d04)






## **Contact**

Feel free to reach out for any questions or support.

- **Name**: Eckysaroyd.
- **GitHub**: [https://github.com/eckysaroyd](https://github.com/eckysaroyd)
- **Portfolio**: [https://eckysaroyd.vercel.app/](https://eckysaroyd.vercel.app/)
- **Email**: [your-email@example.com](mailto:your-email@example.com)



