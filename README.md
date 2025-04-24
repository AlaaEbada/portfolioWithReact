# React + Laravel Portfolio Application

<p>
  <a href="https://reactjs.org/" target="_blank">
    <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" width="120" height="120" alt="React Logo" style="margin-right: 20px;">
  </a>
  <a href="https://laravel.com/" target="_blank">
    <img src="https://cdn.worldvectorlogo.com/logos/laravel-2.svg" width="120" height="120" alt="Laravel Logo">
  </a>
</p>

[![Build Status](https://img.shields.io/github/workflow/status/facebook/react/CI/main?label=tests&style=flat-square)](https://github.com/facebook/react/actions)
[![Total Downloads](https://img.shields.io/npm/dt/react?style=flat-square)](https://www.npmjs.com/package/react)
[![Latest Version](https://img.shields.io/npm/v/react?style=flat-square)](https://www.npmjs.com/package/react)
[![Laravel Version](https://img.shields.io/packagist/v/laravel/framework?label=Laravel&style=flat-square)](https://laravel.com)
[![PHP Version](https://img.shields.io/badge/PHP-v8.2+-777BB4?style=flat-square&logo=php)](https://www.php.net)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](https://opensource.org/licenses/MIT)

## ✨ Overview

This modern portfolio application showcases your work, skills, and professional achievements in a dynamic and responsive way. Built with React's powerful component architecture, Laravel's robust backend, and Inertia.js's seamless integration.

## 🚀 Tech Stack

<table>
  <tr>
    <td width="96">
      <a href="https://reactjs.org">
        <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" width="48" height="48" alt="React" />
      </a>
      <br>React
    </td>
    <td width="96">
      <a href="https://laravel.com">
        <img src="https://cdn.worldvectorlogo.com/logos/laravel-2.svg" width="48" height="48" alt="Laravel" />
      </a>
      <br>Laravel
    </td>
    <td width="96">
      <a href="https://inertiajs.com">
        <img src="https://avatars.githubusercontent.com/u/47703742" width="48" height="48" alt="Inertia.js" />
      </a>
      <br>Inertia.js
    </td>
    <td width="96">
      <a href="https://alpinejs.dev">
        <img src="https://alpinejs.dev/favicon.png" width="48" height="48" alt="Alpine.js" />
      </a>
      <br>Alpine.js
    </td>
  </tr>
  <tr>
    <td width="96">
      <a href="https://filamentphp.com">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAASFBMVEVHcEz9sVD9sE39sE7/w3b9sE3/w3b+sE7/vWv/vmz/w3X+sVD/tlr/v2v+umMBAwcPFhspKSjKlVNZRCp6XDeyhEvkpVaUbj47XQHCAAAACnRSTlMAljcqlog88PANAXe4rgAAAS9JREFUKJF1ku12hCAMRNPWXV2EBAkf7/+mnQS37Z6tIyLMnQR+SESPZQtv2pYHQfd3MnVH3RUL4UHLNVzo97xSj+OoJYSm2v1cwJRshJrBjtzCwEKDebQ5SqEZyzmnoBYKZgNOGRql1RAUkeHeE/YM5vHEY5T0F1rX3Kc1IyfklEpRwAKhsCDE/tDGkEi2y4jUlIY0IyaDqQiIU/hcZQCkE3KpdkOttXZO6CLMZ2W0WJNZZW2y8g9kBlbA7obFKix7aOUYI9t5toCl0hxhoC3mjri6E6uK9DhFq81FRIbvcVct8QUOwOb7Pg6prxCtzl7oMaxyPyG+YOLGXqrHdh8OO5jGHUJMdX+KVkzN72PbbvfyFN6Vbr6czmk+9UG0Xwq/9dcV+7Rfnm7rP7qh7htvpycDeF4BigAAAABJRU5ErkJggg==" width="48" alt="Filament" style="background: #1f2937; border-radius: 6px; padding: 6px;" />
      </a>
      <br>Filament
    </td>
    <td width="96">
      <a href="https://tailwindcss.com">
        <img src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" width="48" height="48" alt="Tailwind" />
      </a>
      <br>Tailwind
    </td>
    <td width="96">
      <a href="https://vitejs.dev">
        <img src="https://cdn.worldvectorlogo.com/logos/vitejs.svg" width="48" height="48" alt="Vite" />
      </a>
      <br>Vite
    </td>
    </td>
    <td width="96">
      <a href="https://www.mysql.com">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" width="48" height="48" alt="MySQL" />
      </a>
      <br>MySQL
    </td>
  </tr>
</table>

### Additional Technologies

- **Radix UI**: Accessible UI primitives for React components
- **Lucide React**: Beautiful, consistent icon set
- **Laravel Debugbar**: Powerful debugging tool
- **Symfony Components**: Including HttpKernel and Translation

## 🛠️ Installation

### Prerequisites

- PHP 8.1+
- Composer
- Node.js & NPM
- MySQL

### Setup Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/AlaaEbada/portfolioWithReact
   cd portfolioWithReact
   ```

2. **Install dependencies**

   ```bash
   composer install
   npm install
   ```

3. **Environment configuration**

   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

   > 📝 Don't forget to configure your database settings in the `.env` file

4. **Set up the database**

   ```bash
   php artisan migrate
   ```

5. **Create admin user for Filament dashboard**

   ```bash
   php artisan make:filament-user
   ```

6. **Start development servers**

   ```bash
   # In one terminal
   php artisan serve
   
   # In another terminal
   npm run dev
   ```

7. **Access your application**

   Open your browser and navigate to [http://localhost:8000](http://localhost:8000)

## 🖥️ Project Structure

```
├── app/                   # Laravel application code
│   ├── Filament/          # Filament admin panel components
│   ├── Http/              # Controllers and middleware
│   └── Models/            # Eloquent models
├── resources/
│   ├── js/                # React components and pages
│   │   ├── Components/    # Reusable React components
│   │   ├── Layouts/       # Layout components
│   │   └── Pages/         # Page components for Inertia
│   └── views/             # Blade templates
├── routes/                # Laravel routes
└── public/                # Publicly accessible files
```

## 📚 Learning Resources

<details>
<summary>Expand for learning resources</summary>

- **React**:
  - [Official Documentation](https://reactjs.org/docs/getting-started.html)
  - [React Hooks Guide](https://reactjs.org/docs/hooks-intro.html)

- **Laravel**:
  - [Laravel Documentation](https://laravel.com/docs)
  - [Laracasts](https://laracasts.com/)

- **Inertia.js**:
  - [Official Documentation](https://inertiajs.com/)
  - [Integration Guide](https://inertiajs.com/server-side-setup)

- **Tailwind CSS**:
  - [Documentation](https://tailwindcss.com/docs)
  - [Component Examples](https://tailwindui.com/components)

- **Filament**:
  - [Documentation](https://filamentphp.com/docs)

</details>

## 🤝 Contributing

Contributions are welcome and appreciated! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

Made with ❤️ by [Alaa Ebada](https://github.com/AlaaEbada)
