# MegaBlog

A modern, professional blogging platform built with React.js and Appwrite. Create, share, and manage your blog posts with an intuitive interface and powerful features.

## ✨ Features

- **User Authentication**

  - Secure signup and login with Appwrite authentication
  - Session management with Redux
  - Protected routes for authenticated users

- **Post Management**

  - Create and publish blog posts with a rich text editor (TinyMCE)
  - Upload featured images for your posts
  - Edit and delete your own posts
  - Draft and publish functionality

- **Modern UI/UX**

  - Clean, professional design with Tailwind CSS
  - Fully responsive layout for all devices
  - Smooth loading states and animations
  - Intuitive navigation and user experience

- **Content Discovery**
  - Browse all published posts
  - View individual post details
  - Responsive post cards with images

## 🛠️ Tech Stack

- **Frontend:** React.js with Vite
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit
- **Routing:** React Router DOM
- **Form Handling:** React Hook Form
- **Rich Text Editor:** TinyMCE
- **Backend Services:** Appwrite (Authentication, Database, Storage)

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- An Appwrite account ([create one here](https://appwrite.io))
- TinyMCE API key ([get one here](https://www.tiny.cloud/))

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/mega-blog.git
   cd mega-blog
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the root directory by copying `.env.example`:

   ```bash
   cp .env.example .env
   ```

   Then update the `.env` file with your actual credentials:

   ```env
   VITE_APPWRITE_URL=https://cloud.appwrite.io/v1
   VITE_APPWRITE_PROJECT_ID=your_project_id
   VITE_APPWRITE_DATABASE_ID=your_database_id
   VITE_APPWRITE_COLLECTION_ID=your_collection_id
   VITE_APPWRITE_BUCKET_ID=your_bucket_id
   VITE_TINY_EDITOR_API_KEY=your_tinymce_key
   ```

4. **Set up Appwrite**

   - Create a new project in Appwrite
   - Create a database and collection with the following attributes:
     - `title` (string, required)
     - `content` (string, required)
     - `featuredImage` (string, required)
     - `status` (string, required)
     - `userId` (string, required)
   - Create a storage bucket for images
   - Configure authentication methods (Email/Password)

5. **Run the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**

   Navigate to `http://localhost:5173`

## 📦 Building for Production

```bash
npm run build
```

The build files will be in the `dist` directory, ready for deployment.

## 🌐 Deployment

This project can be easily deployed to:

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)

Make sure to set your environment variables in your deployment platform.

## 📝 Usage

1. **Sign Up**: Create a new account to start blogging
2. **Create Post**: Click "Add Post" to create your first blog post
3. **Edit Post**: Manage your posts from the "All Posts" page
4. **Browse**: View all published posts on the home page

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the Apache License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Appwrite](https://appwrite.io) for backend services
- [TinyMCE](https://www.tiny.cloud/) for the rich text editor
- [Tailwind CSS](https://tailwindcss.com) for styling
- [React](https://react.dev) for the UI framework

## 📧 Contact

For questions or feedback, please open an issue in the GitHub repository.

---

Made with ❤️ using React and Appwrite
