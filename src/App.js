import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-react";
import parse from "html-react-parser";
import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  // console.log(text);

  function getLastWord(text) {
    // let n = text.split(" ");
    console.log(text);
    let tex = text.replace(/<\/?[^>]+(>|$)/g, "");

    console.log(`tex-- ${tex}`);
    let funx = getlw(text);
    console.log(`last word ${funx}`);
    let link = validURL(funx);
    console.log(link);

    // var p = new CKEDITOR.dom.element("p");

    // var strong = new CKEDITOR.dom.element("strong");
    // p.append(strong);

    // var em = p.append("em");
  }

  //validating url
  function validURL(str) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  }

  function getlw(text) {
    let n = text.split(" ");

    return n[n.length - 1]
      .replace(/<\/?[^>]+(>|$)/g, "")
      .replace(/\&nbsp;/g, "");
  }

  return (
    <div className='App'>
      <div className='editor'>
        <CKEditor
          editor={ClassicEditor}
          data={text}
          onChange={(event, editor) => {
            const data = editor.getData();
            setText(data);
            getLastWord(data);
          }}
        />
      </div>
      <div>
        <h2>Content</h2>
        <p>{parse(text)}</p>
      </div>
    </div>
  );
}

export default App;
