import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function About() {
  return (
    <main className="flex min-h-screen flex-1 flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="mb-8 text-3xl">Welcome to My Portfolio</h1>
      <p className="mb-12 text-lg">
        Check out my LinkedIn and GitHub profiles:
      </p>
      <div className="flex flex-col items-center">
        <a
          href="https://www.linkedin.com/in/lam-dang-657949144/"
          className="mb-4 flex items-center text-xl text-gray-800 no-underline"
        >
          <FaLinkedin className="mr-2 text-xl" />
          LinkedIn
        </a>
        <a
          href="https://github.com/lam-valamorgulis/admin-project-reactjs-tailwindcss-redux"
          className="flex items-center text-xl text-gray-800 no-underline"
        >
          <FaGithub className="mr-2 text-xl" />
          GitHub
        </a>
      </div>
    </main>
  );
}
