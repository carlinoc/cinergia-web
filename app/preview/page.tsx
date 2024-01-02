import Navbar from '../ui/containers/GlobalContainers/Navbar/Navbar';
import Footer from '../ui/containers/GlobalContainers/Footer/Footer';
import styles from '@/app/ui/styles/preview.module.css'

export default function page() {
    return (
        <>
        {/* Fixed header with navigation bar */}
        <header className="fixed top-0 inset-x-0 z-50 w-full">
            <Navbar />
        </header>

        {/* Main content area */}
        <main className="w-full">
            <section className="flex items-center justify-center w-full bg-cover bg-center ">
            <div className="relative flex items-end justify-center w-full min-h-[80vh] bg-gradient-to-t from-bgPrimaryDark via-bgPrimaryDark/70 to-transparent">
                <div className="flex flex-col justify-center gap-8 w-11/12 md:w-10/12">
                <div className="flex flex-col gap-4 w-full">
                    {/* Banner title and movie information */}
                    <div className="w-full">
                        <div className={styles.mov1}>
                            <iframe src="https://muse.ai/embed/xDsP7wV?search=0&links=0&logo=0&title=0&cover_play_position=center" className={styles.frame1} frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
        
                    {/* Production company name */}
                    <span className="span-xl text-white font-medium">
                    Title of movie
                    </span>

                    <p className="paragraph-lg line-clamp-5 lg:line-clamp-none font-normal text-primary-100 max-w-prose">
                    Una mirada personal a los orígenes del líder militar francés y su rápido y despiadado ascenso a emperador. La historia se ve a través de la lente de la relación adictiva y volátil de Napoleón Bonaparte con su esposa y único amor verdadero, Josefina.
                    </p>
                </div>
                </div>
            </div>
            </section>    

            {/* Footer component */}
            <Footer />
        </main>
        </>

        
      );
}