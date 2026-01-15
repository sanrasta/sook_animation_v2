import SookIntro from '../components/SookIntro';

export default function IntroPage() {
  return (
    <main style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <SookIntro autoPlay={true} />
    </main>
  );
}
