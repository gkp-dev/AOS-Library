import {useEffect} from "react"
import  initAOS from './hooks/useAOS'

export default function App() {
  useEffect(()=>{
     initAOS({duration:1600})
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
