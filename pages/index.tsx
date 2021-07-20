import  initAOS from '../core/hooks/useAOS'

export default function Home() {

  if (typeof document !== 'undefined') {
    initAOS({ duration: 2000, once: true })
  }
  

  return (
    <div className="App">
      <article data-aos="fade-up"></article>
      <article data-aos="fade-up"></article>
      <article data-aos="fade-up"></article>
      <article data-aos="fade-up"></article>
      <article data-aos="fade-up"></article>
      <article data-aos="fade-up"></article>
      <article data-aos="fade-up"></article>
      <article data-aos="fade-up"></article>
      <article data-aos="fade-up"></article>
      <article data-aos="fade-up"></article>
      <article data-aos="fade-up"></article>
      <article data-aos="fade-up"></article>
      <article data-aos="fade-up"></article>
      <article data-aos="fade-up"></article>
      <article data-aos="fade-up"></article>
      <article data-aos="fade-up"></article>
      <article data-aos="fade-up"></article>
      <article data-aos="fade-up"></article>
      <article data-aos="fade-up"></article>
      <article data-aos="fade-up"></article>

    </div>
  );
}
