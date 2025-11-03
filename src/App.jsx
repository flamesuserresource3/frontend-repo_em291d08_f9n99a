import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutAndSkills from './components/AboutAndSkills';
import ProjectsAndContact from './components/ProjectsAndContact';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0d12] text-white font-[Inter] antialiased">
      <Navbar />
      <main>
        <Hero />
        <AboutAndSkills />
        <ProjectsAndContact />
      </main>
      <footer className="border-t border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} Shivani Balasubramaniam. All rights reserved.</p>
          <a href="#home" className="text-white/70 hover:text-white text-sm">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
