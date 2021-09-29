import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`https://emoji-api.com/emojis?access_key=757bf32b3bdd68f69f12a326ab72eaef61063597`).then((result) => {
      setData(result.data);
    });

  }, []);

  function searchFilter() {
    var search = document.getElementById('inp_search').value.trim().toLowerCase();
    var contents = document.getElementById('card_container_id').children;
    for (var i = 0; i < contents.length; i++) {
      var cardItem = document.getElementsByClassName("emoji_name")[i].innerText.trim().toLowerCase();
      if (cardItem.includes(search)) {
        contents[i].style.display = "";
      }
      else {
        contents[i].style.display = "none";
      }
    }
  }

  return (
    <>
      <div className="container">
        <h1 className="title">Emoji Search App</h1>
        <p className="app_desc">A simple emoji search app made in ReactJs.</p>
        <input type="search" id="inp_search" placeholder="Search for a Emoji" onChange={searchFilter} />
        <div className="card_container" id="card_container_id">
          {
            data && data.map((ele) => {
              return (
                <div className="card_item" title="Click to Copy">
                  <p className="emoji_icon">{ele.character}</p>
                  <p className="emoji_name">{ele.unicodeName}</p>
                </div>
              );
            })
          }

        </div>
      </div>
    </>
  );
}

export default App;
