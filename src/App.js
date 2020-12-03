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
    <div className="container min-h-screen bg-white dark:bg-gray-900 body-font">
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

          <div className="flex flex-wrap -m-4">
            <Card title="Education" icon={<Education />} />
            <Card title="Recreational" icon={<Recreational />} />
            <Card title="Social" icon={<Social />} />
            <Card title="DIY" icon={<DIY />} />
            <Card title="Charity" icon={<Charity />} />
            <Card title="Cooking" icon={<Cooking />} />
            <Card title="Relaxation" icon={<Relaxation />} />
            <Card title="Music" icon={<Music />} />
            <Card title="Busywork" icon={<Busy />} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
