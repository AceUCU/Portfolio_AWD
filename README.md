# Portfolio_AWD

## Personal Portfolio Website – Laravel + Inertia.js + React

A personal portfolio website converted into a **Laravel + Inertia.js + React** application. This project features a dynamic Gallery/Projects section with complete CRUD (Create, Read, Update, Delete) operations, database integration, and server-side validation using Laravel.

## Technologies Used

- **Laravel 12** – Backend framework
- **PHP 8.2** – Server-side programming language
- **Inertia.js** – Connects Laravel with React
- **React.js** – Frontend framework
- **MySQL** – Database management
- **Tailwind CSS** – Website styling
- **Vite** – Frontend development and build tool

## Features

### Personal Portfolio
- Home page
- About Me section
- Skills section
- Experience section
- Contacts section
- Dynamic Gallery/Projects section

### Gallery/Projects CRUD Management
- Add new projects
- View project records
- Edit existing projects
- Delete projects with confirmation
- Upload project images
- Add project categories and descriptions
- Add project completion dates
- Add project URLs

### Server-Side Validation
- Required field validation
- Maximum character length validation
- Date format validation
- Unique project title validation
- Image type and file size validation
- Project URL validation
- Custom validation error messages
- Display validation errors beside form fields
- Retain entered values when validation fails

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/AcEtOnGTV/Portfolio-Laravel-Inertia-React.git
```

### 2. Navigate to the Project Folder

```bash
cd Portfolio-Laravel-Inertia-React
```

### 3. Install PHP Dependencies

```bash
composer install
```

### 4. Install JavaScript Dependencies

```bash
npm install
```

### 5. Create the Environment File

```bash
cp .env.example .env
```

For Windows Command Prompt, use:

```cmd
copy .env.example .env
```

### 6. Generate the Application Key

```bash
php artisan key:generate
```

### 7. Configure the Database

Open the `.env` file and configure your MySQL database:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=ace_database
DB_USERNAME=root
DB_PASSWORD=
```

Create the `ace_database` database in phpMyAdmin or MySQL before proceeding.

### 8. Run Database Migrations

```bash
php artisan migrate
```

### 9. Create the Storage Link

```bash
php artisan storage:link
```

### 10. Run the Application

Open two terminals.

**Terminal 1 – Laravel Server**

```bash
php artisan serve
```

**Terminal 2 – Vite Development Server**

```bash
npm run dev
```

Open the application in your browser:

```text
http://127.0.0.1:8000
```

## Project Structure

```text
Portfolio_AWD/
├── app/
│   ├── Http/
│   │   └── Controllers/
│   │       └── GalleryController.php
│   └── Models/
│       └── Gallery.php
├── database/
│   └── migrations/
├── resources/
│   └── js/
│       ├── Components/
│       │   └── ProjectForm.jsx
│       └── Pages/
│           ├── Projects/
│           │   ├── Index.jsx
│           │   ├── Create.jsx
│           │   └── Edit.jsx
│           └── Portfolio.jsx
├── routes/
│   └── web.php
├── public/
├── composer.json
├── package.json
└── README.md
```

## Author

**Ace Rael Tandingan**

Bachelor of Science in Information Technology (BSIT)  
Urdaneta City University

## Course Information

**Course:** IT ELEC01 – Advanced Web Development  
**Activity:** Midterm Laboratory Activity – Portfolio CRUD with Validation  
**Instructor:** Giobet T. Aban

## Repository

[Portfolio-Laravel-Inertia-React – GitHub](https://github.com/AcEtOnGTV/Portfolio-Laravel-Inertia-React)
