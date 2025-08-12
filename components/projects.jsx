import Link from "next/link";
import { Button } from "./ui/button";

const Projects = () => {
  return (
    <section className="max-w-[1024px] mx-auto px-4">
      <h2 className="color-foreground text-3xl mb-5">Projects</h2>

      <div className="flex flex-col gap-4">
        <div className="p-2.5 bg-accent-foreground text-accent rounded-2xl">
          <p>
            BIGISUB.NG is a dynamic web application for airtime and data subscriptions, powered by Django for a secure backend and HTMX for a fast, interactive user interface. This combination ensures a reliable and highly responsive service.
          </p>
          <div className="mt-2.5">
            <Link href={'https://bigisub.ng'} target="_blank" className="text-accent-foreground bg-accent p-1 rounded-sm px-3">Check It Out</Link>
          </div>
        </div>
        <div className="p-2.5 bg-accent-foreground text-accent rounded-2xl">
          <p>
            LANAHEALTHCARE - Built and launched a demo B2B health platform designed to streamline communication and data sharing within the healthcare sector. The application provides a secure and centralized solution for managing business-to-business operations, from patient data to administrative tasks.
          </p>
          <div className="mt-2.5">
            <Link href={'https://lana-business.onrender.com/'} target="_blank" className="text-accent-foreground bg-accent p-1 rounded-sm px-3">Check It Out</Link>
          </div>
        </div>
        <div className="p-2.5 bg-accent-foreground text-accent rounded-2xl">
          <p>
            FilmFlix is a dynamic movie directory that showcases the latest and trending films, built with React.js for the frontend and Appwrite for a robust backend. This architecture ensures a fast and seamless experience for users as they browse through popular and newly released titles.
          </p>
          <div className="mt-2.5">
            <Link href={'https://film-flix.netlify.app/'} target="_blank" className="text-accent-foreground bg-accent p-1 rounded-sm px-3">Check It Out</Link>
          </div>
        </div>
        <div className="p-2.5 bg-accent-foreground text-accent rounded-2xl">
          <p>
            NOTES is a simple, markdown-based note-taking application powered by Next.js for a fast user interface and Firebase for efficient data management. This combination allows for real-time synchronization, ensuring your notes are always up-to-date across all your devices.
          </p>
          <div className="mt-2.5">
            <Link href={'https://manueljo-notes.netlify.app/'} target="_blank" className="text-accent-foreground bg-accent p-1 rounded-sm px-3">Check It Out</Link>
          </div>
        </div>
        <div className="p-2.5 bg-accent-foreground text-accent rounded-2xl">
          <p>
            NASA APOD is a web application that presents the Astronomy Picture of the Day from NASA, developed using React.js for a clean and interactive display. The app fetches images and descriptions daily from NASA's official API, providing a new astronomical wonder for users to explore each day.
          </p>
          <div className="mt-2.5">
            <Link href={'https://nasa-react-app-project.netlify.app/'} target="_blank" className="text-accent-foreground bg-accent p-1 rounded-sm px-3">Check It Out</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
