import "./app.css";
import "regenerator-runtime/runtime";
import SpeechRecognition, {useSpeechRecognition,} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
import { useState } from "react";

function App() {
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy);

  const startListing = () => SpeechRecognition.startListening({ continuous: true, language: "en-IN" });

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <>
      <div className="container">
        <h2>Speech to Text Converter</h2>
        <br />

        <div className="main-content" onClick={() => setTextToCopy(transcript)}>
          {transcript}
        </div>

        <div className="btn-style">
          <button onClick={setCopied}>Copy</button>
          <button onClick={startListing}>Start listening</button>
          <button onClick={SpeechRecognition.stopListening}>Stop listening</button>
        </div>
        
      </div>
    </>
  );
}

export default App;
