import './App.css';
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    axios.get(`https://emoji-api.com/emojis?access_key=757bf32b3bdd68f69f12a326ab72eaef61063597`)
      .then((result) => {
        setData(result.data);
      });
  }, []);

  function copyClipboard() {
    const element = document.getElementsByClassName("card_item");
    for (var j = 0; j < element.length; j++) {
      const cardClicked = (k) => {
        var copyText = document.getElementsByClassName("card_item")[k]
          .children[0].innerText;
        navigator.clipboard.writeText(copyText);
      };
      element[j].addEventListener("click", cardClicked.bind(this, j), false);
    }
  }

  return (
    <>
      <div className="container">
        <h1 className="title">Emoji Search App</h1>
        <p className="app_desc">A simple emoji search app made in ReactJs.</p>
        <input type="search" id="inp_search" placeholder="Search for a Emoji" onChange={(e) => setSearch(e.target.value)}/>
        <p className="copy_icon">
          <i className="far fa-clone"></i> Click on Emoji To Copy.
        </p>
        <div className="card_container" id="card_container_id">
          {data &&
            data.map((ele) => {
              if (search === null || ele.unicodeName.toLowerCase().includes(search.toLowerCase()))
                return (
                  <div className="card_item" onClick={copyClipboard} title="Click to Copy">
                    <p className="emoji_icon">{ele.character}</p>
                    <p className="emoji_name">{ele.unicodeName}</p>
                  </div>
                );
              return null;
            })}
        </div>
        <p className="copyright">&copy; 2021 Anant Kumawat.</p>
      </div>
    </>
  );
}

export default App;