<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">ECOMMERCE-STORE</h1>
</p>
<p align="center">
    <em><code>► Dummey project</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/mohammedzkullab/ecommerce-store?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/mohammedzkullab/ecommerce-store?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/mohammedzkullab/ecommerce-store?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/mohammedzkullab/ecommerce-store?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
<img src="https://img.shields.io/badge/NextJs-F7DF1E.svg?style=flat&logoColor=white" alt="JavaScript">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
    <img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
    <img src="https://img.shields.io/badge/Jest-C21325.svg?style=flat&logo=Jest&logoColor=white" alt="Jest">
    <img src="https://img.shields.io/badge/Swiper-6332F6.svg?style=flat&logo=Swiper&logoColor=white" alt="Swiper">
    <br>
    <img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
    <img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
    <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
    <img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">

</p>
<hr>

## 🔗 Quick Links

> - [📍 Overview](#-overview)
> - [📦 Features](#-features)
> - [📂 Repository Structure](#-repository-structure)
> - [🧩 Modules](#-modules)
> - [🚀 Getting Started](#-getting-started)
>   - [⚙️ Installation](#️-installation)
>   - [🤖 Running ecommerce-store](#-running-ecommerce-store)
>   - [🧪 Tests](#-tests)
> - [🛠 Project Roadmap](#-project-roadmap)
> - [🤝 Contributing](#-contributing)
> - [📄 License](#-license)
> - [👏 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

<code>
This project is an e-commerce system built for learning purposes. It is designed to showcase a modern and responsive online store that provides a smooth user experience. The system features a variety of components typically found in e-commerce websites, such as product listings, shopping carts, and user authentication.
</code>
The project is built using the following technologies:
<br/>

- Next.js: For server-side rendering and static site generation.
- React.js: For building user interfaces.
- TypeScript: For static typing and improved developer experience.
- Tailwind CSS: For utility-first CSS styling and theming.

---

## 📦 Features

<code>
- Product Listings: Browse a collection of products with detailed information.
- Product Search and Filtering: Easily search and filter products based on categories, price, and other criteria.
- Shopping Cart: Add products to the cart, update quantities, and view the total price.
- Checkout Process: A step-by-step process to purchase items, including payment and shipping options.
- User Authentication: Register and log in to manage orders and personal information.
- Responsive Design: Optimized for various devices, including mobile, tablet, and desktop.
- Dark/Light Theme Support: Toggle between dark and light themes, with primary color #655CFE.
</code>

---

## 📂 Repository Structure

```sh
└── ecommerce-store/
    ├── README.md
    ├── jest.config.js
    ├── jest.setup.js
    ├── next.config.js
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public
    │   ├── assets
    │   │   └── img
    │   ├── favicon.ico
    │   ├── next.svg
    │   └── vercel.svg
    ├── src
    │   ├── app
    │   │   ├── layout.tsx
    │   │   └── page.tsx
    │   ├── components
    │   │   ├── Button
    │   │   ├── Card
    │   │   ├── Container
    │   │   ├── Dropdown
    │   │   ├── HeadingWithDesc
    │   │   ├── ImageGrid
    │   │   ├── Link
    │   │   ├── Logo
    │   │   ├── Navlink
    │   │   ├── NoSSR
    │   │   ├── Product
    │   │   │   ├── ButtonsGroup
    │   │   ├── ProductsGrid
    │   │   ├── Slider
    │   │   ├── StarRating
    │   │   ├── index.ts
    │   │   └── types
    │   │       └── index.ts
    │   ├── data
    │   │   ├── constants
    │   │   │   └── index.ts
    │   │   └── index.ts
    │   ├── features
    │   │   └── home
    │   │       ├── components
    │   │       │   ├── HomeBlogSection
    │   │       │   ├── HomeSecondSection
    │   │       │   ├── HomeSlider
    │   │       │   ├── HomeSpecialOffersSection
    │   │       │   ├── HomeTimerSection
    │   │       │   └── index.ts
    │   │       └── index.ts
    │   ├── hooks
    │   │   ├── index.ts
    │   │   └── useCountDownTimer.ts
    │   ├── layouts
    │   │   ├── MainLayout
    │   │   │   ├── components
    │   │   │   │   ├── Footer
    │   │   │   │   ├── Navbar
    │   │   │   │   ├── Navlinks
    │   │   │   │   ├── ReturnTop
    │   │   │   │   └── index.ts
    │   │   │   ├── data
    │   │   │   │   ├── constants
    │   │   │   │   └── index.ts
    │   │   │   ├── hooks
    │   │   │   │   ├── index.ts
    │   │   │   │   └── useScrollPosition
    │   │   └── index.ts
    │   ├── lib
    │   │   ├── @headlessUi
    │   │   │   └── index.ts
    │   │   ├── @heroicons
    │   │   │   └── index.ts
    │   │   ├── index.ts
    │   │   └── useSWR
    │   │       └── index.ts
    │   ├── types
    │   │   └── index.ts
    │   └── utils
    │       ├── getVariant
    │       │   └── index.ts
    │       └── index.ts
    ├── styles
    │   └── global.css
    ├── tailwind.config.js
    └── tsconfig.json
```

---

## 🚀 Getting Started

**_Requirements_**

Ensure you have the following dependencies installed on your system:

- **TypeScript**: `version x.y.z`

### ⚙️ Installation

1. Clone the ecommerce-store repository:

```sh
git clone https://github.com/mohammedzkullab/ecommerce-store
```

2. Change to the project directory:

```sh
cd ecommerce-store
```

3. Install the dependencies:

```sh
npm install
```

### 🤖 Running ecommerce-store

Use the following command to run ecommerce-store:

```sh
npm run build && node dist/main.js
```

### 🧪 Tests

To execute tests, run:

```sh
npm test
```

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/mohammedzkullab/ecommerce-store/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/mohammedzkullab/ecommerce-store/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/mohammedzkullab/ecommerce-store/issues)**: Submit bugs found or log feature requests for Ecommerce-store.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/mohammedzkullab/ecommerce-store
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

[**Return**](#-quick-links)

---
