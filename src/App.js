import React from "react";
import PocketBase from "pocketbase";
import { useState, useEffect } from "react";

const client = new PocketBase("http://127.0.0.1:8090");

function App() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCards() {
      const result = await client.records.getFullList("cards");
      console.log(result);
      setCards(result);
    }
    fetchCards();
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <p>Loading</p>
  ) : (
    cards.map((element) => <div>{JSON.stringify(element)}</div>)
  );
}

export default App;
