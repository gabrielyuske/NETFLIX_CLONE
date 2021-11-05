import React,{ useEffect ,useState} from "react";
import "./App.css";
import Tmdb from "./Tmdb";
import MovieRow from "./componets/MovieRow";
import FeaturedMovie from "./componets/FeaturedMovie";
import Header from "./componets/Header";

// eslint-disable-next-line import/no-anonymous-default-export
export default() => {
  
  const [movieList,setMovieList]= useState([]);
  const [featuredData,setFeaturedData] = useState(null);
  const [blackHeader, setblackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () =>{
      //Lista total 
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Featured Aleatoria dos orginais da Netflix
      let originals = list.filter(i=>i.slug === "originals");
      let randomChosen = Math.floor(Math.random() *(originals[0].items.results.length -1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id,"tv");
      setFeaturedData(chosenInfo);
    }
    loadAll();
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10){
        setblackHeader(true);
      }else{
        setblackHeader(false);
      }
    }
    window.addEventListener("scroll",scrollListener);
    return()=>{
      window.removeEventListener("scroll",scrollListener);
    }
  });
  
  return(
    <div className="page">

      <Header black={blackHeader}/>

      {featuredData &&
        <FeaturedMovie item={featuredData}/>
      }

      <section className="lists">
        {movieList.map((item,key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
      <footer>
        Feito com <span role="img" aria-label="coracao">💚</span> por chameleon
        Direitos de image para Netflix<br/>
        Dados pegos do site Themoviedb.org
      </footer>

      {movieList.length <= 0 && 
        <div className="loading">
          {<img src="https://images.says.com/uploads/story_source/source_image/599933/19bb.gif" alt="Carregando"/>}
        </div>
      }
      
    </div>
  );
}
