import Card from './components/Card';
import Footer from './components/Footer';
import {
  Busy,
  Charity,
  Cooking,
  DIY,
  Education,
  Music,
  Recreational,
  Relaxation,
  Social,
} from './components/Icons';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 body-font">
      <section className="text-gray-500">
        <div className="px-5 py-8 mx-auto flex flex-wrap">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-4xl text-indigo-500 tracking-widest font-medium title-font mb-1">
              Bored Act
            </h1>
            <h2 className="sm:text-2xl text-xl font-medium title-font text-gray-900 dark:text-white">
              Fight your boredom and get motivated!
            </h2>
          </div>

          <div className="flex flex-wrap justify-center -m-4">
            <Card title="education" icon={<Education />} />
            <Card title="recreational" icon={<Recreational />} />
            <Card title="social" icon={<Social />} />
            <Card title="diy" icon={<DIY />} />
            <Card title="charity" icon={<Charity />} />
            <Card title="cooking" icon={<Cooking />} />
            <Card title="relaxation" icon={<Relaxation />} />
            <Card title="music" icon={<Music />} />
            <Card title="busywork" icon={<Busy />} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
