import React from "react";
import Section from "components/Section";

function Home() {
  const items = [
    {
      id: 1,
      title: "Little Dark Age",
      description: "MGMT",
      image: "https://i.scdn.co/image/ab67616d00001e02b47d309281c66820b7137f5d",
    },
    {
      id: 2,
      title: "Kelebekler",
      description: "Madrigal",
      image: "https://i.scdn.co/image/ab67616d00001e024c0b400788192745566a9a14",
    },
    {
      id: 3,
      title: "Who Are You Counting On?",
      description: "Lars Eriksson",
      image: "https://i.scdn.co/image/ab67616d00001e0282f1dc0162848386531a9d44",
    },
    {
      id: 4,
      title: "Another Love",
      description: "Tom Odell",
      image: "https://i.scdn.co/image/ab67616d00001e021917a0f3f4152622a040913f",
    },
    {
      id: 5,
      title: "Daha Mutlu Olamam",
      description: "Mor ve Ötesi",
      image: "https://i.scdn.co/image/ab67616d00001e02598a4aef0e9be51b51ea770e",
    },
  ];
  return (
    <div>
      <Section title="Recently Played" more={"blabla"} items={items}/>
      <Section title="Made For Barış Mesüm" more={"blabla"} items={items}/>
      <Section title="Shows To Try" more={"blabla"} items={items}/>
    </div>
  );
}

export default Home;
