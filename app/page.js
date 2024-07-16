import Cursor from '@/components/Cursor';
import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import Border from '@/components/Border';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import MyStars from '@/components/Stars';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  return (
    <main className="flex min-h-[100dvh] flex-col relative">
      <LoadingScreen />
      <div className="w-screen h-full fixed -z-50 pointer-events-none  select-none">
        <MyStars count={3700} radius={60} />
      </div>
      <Border />
      <Cursor color={'#FDBA74'} />
      <Nav />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </main>
  );
}
