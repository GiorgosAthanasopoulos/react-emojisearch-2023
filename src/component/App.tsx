import "../style/App.css";
import emojis_data from "../data/emojis.json";
import {useState} from "react";

function App(): JSX.Element {
    const [word, setWord] = useState("");
    const [emojis, setEmojis] = useState(emojis_data);

    function handleEmojiSearch(e: any) {
        setWord(e.target.value)
        if (word === "" || word === " ") {
            setEmojis(emojis_data)
        } else {
            let newEmojis = []
            for (let i = 0; i < emojis_data.length; i++) {
                // @ts-ignore
                if (emojis_data[i]["name"].includes(word)) {
                    newEmojis.push(emojis_data[i])
                }
            }
            // @ts-ignore
            setEmojis(newEmojis)
        }
    }

    return (
        <>
            <div>
                <h1>Emoji Search</h1>
                <div>
                <input
                    value={word}
                    onChange={handleEmojiSearch}
                    placeholder="Search..."
                />
                    <button onClick={() => {
                    setEmojis(emojis_data)}
                    }>Clear</button>
                </div>
                <div>
                    {emojis.length > 0 ?
                        emojis.map(emoji => {
                            return <span key={emojis_data.indexOf(emoji)}>{emoji["emoji"]} {emoji["name"]}</span>
                        })
                        : <></>}
                </div>
            </div>
        </>
    )
}

export default App