import {useState} from "react";
export default function Detective() {
    const [sherlock, setSherlock] = useState("психопат");
    const handleClick = () => {
        setSherlock(
            "высокоактивный социопат"
        )
    }
    return (
        <div>
            Шерлок {sherlock}
            <div>
              <button onClick={handleClick}>
                узнать правду
              </button>
            </div>
        </div>
    )
}