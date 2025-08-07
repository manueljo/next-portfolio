import Link from "next/link";

const Projects = () => {
  return (
    <section className="max-w-[1024px] mx-auto px-4">
      <h2 className="color-foreground text-3xl mb-5">Projects</h2>
      <ul className="list-none flex flex-col gap-4 flex-wrap">
        <li className="p-2.5 bg-accent-foreground text-accent rounded-2xl flex-1 ">BIGISUB.NG - A dynamic web app for Airtime and Data subscription [Django,HTMX] | <Link href={'https://bigisub.ng'} target="_blank" className="text-accent-foreground bg-accent p-1 rounded-sm">View</Link> </li>
        <li className="p-2.5 bg-accent-foreground text-accent rounded-2xl">FilmFlix - A movie directory platform showing latest and trending movies [Reactjs,Appwrite] | <Link href={'https://film-flix.netlify.app/'} className="text-accent-foreground bg-accent p-1 rounded-sm" target="_blank">View</Link> </li>
        <li className="p-2.5 bg-accent-foreground text-accent rounded-2xl">NOTES - A simple markdown note taking app [Nextjs, Firebase] | <Link href={'https://manueljo-notes.netlify.app/'} className="text-accent-foreground bg-accent p-1 rounded-sm" target="_blank">View</Link></li>
        <li className="p-2.5 bg-accent-foreground text-accent rounded-2xl">NASA APOD - An Astronomy Picture of the day app from NASA [Reactjs] | <Link href={'https://nasa-react-app-project.netlify.app/'} className="text-accent-foreground bg-accent p-1 rounded-sm" target="_blank">View</Link></li>
      </ul>
    </section>
  );
};

export default Projects;
