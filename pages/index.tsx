import {useEffect} from "react"
import  useAOS from './hooks/useAOS'

export default function App() {
  useEffect(()=>{
     useAOS({duration:1600})
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
