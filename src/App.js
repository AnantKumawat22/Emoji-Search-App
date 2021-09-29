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
    for (var i = 0; i < contents.length; ++i) {
      var cardItem = document.getElementsByClassName("emoji_name")[i].innerText.trim().toLowerCase();
      if (cardItem.includes(search)) {
        contents[i].style.display = "";
      }
      else {
        contents[i].style.display = "none";
      }
    }
  }

  function copyClipboard() {
    const element = document.getElementsByClassName('card_item');
    for (var j = 0; j < element.length; j++) {
      const cardClicked = (k) => {
        var copyText = document.getElementsByClassName('card_item')[k].children[0].innerText;
        navigator.clipboard.writeText(copyText);
      }
      element[j].addEventListener("click", cardClicked.bind(this, j), false);
    }
  }




  return (
    <>
      <div className="container">
        <h1 className="title">Emoji Search App</h1>
        <p className="app_desc">A simple emoji search app made in ReactJs.</p>
        <input type="search" id="inp_search" placeholder="Search for a Emoji" onChange={searchFilter} />
        <p className="copy_icon"><i className="far fa-clone"></i> Click on Emoji To Copy.</p>
        <div className="card_container" id="card_container_id">
        
          {
            data && data.map((ele) => {
              return (
                <div className="card_item" onClick={copyClipboard} title="Click to Copy">
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
