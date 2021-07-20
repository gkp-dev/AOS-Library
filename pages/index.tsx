import {useEffect} from "react"
import 'aos/dist/aos.css'
import AOS from 'aos'

export default function App() {
  useEffect(()=>{
     AOS.init({duration: 1500})
  },[])
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
