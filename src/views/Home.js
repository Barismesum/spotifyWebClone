import React from "react";
import Section from "components/Section";
import mor from "data/audio/mvo.mp3";
import mgmt from "data/audio/mgmt.mp3";
import lars from "data/audio/lars.mp3";
import madrigal from "data/audio/madrigal.mp3";
import tom from "data/audio/tom.mp3";

function Home() {
  const items = [
    {
      id: 1,
      title: "Little Dark Age",
      description: "MGMT",

      image: "https://i.scdn.co/image/ab67616d00001e02b47d309281c66820b7137f5d",
      type: "album",
      src: mgmt,
    },
    {
      id: 2,
      title: "Kelebekler",
      description: "Madrigal",
      type: "podcast",
      image: "https://i.scdn.co/image/ab67616d00001e024c0b400788192745566a9a14",
      src: madrigal,
    },
    {
      id: 3,
      title: "Who Are You Counting On?",
      description: "Lars Eriksson",
      type: "album",
      image: "https://i.scdn.co/image/ab67616d00001e0282f1dc0162848386531a9d44",
      src: lars,
    },
    {
      id: 4,
      title: "Another Love",
      description: "Tom Odell",
      type: "album",
      image: "https://i.scdn.co/image/ab67616d00001e021917a0f3f4152622a040913f",
      src: tom,
    },
    {
      id: 5,
      title: "Daha Mutlu Olamam",
      description: "Mor ve Ötesi",
      type: "album",
      image: "https://i.scdn.co/image/ab67616d00001e02598a4aef0e9be51b51ea770e",
      src: mor,
    },
  ];

 
  return (
    <div>
      <Section title="Recently Played" more={"#"} items={items} />
      <Section title="Made For Barış Mesüm" more={"#"} items={items} />
      <Section title="Shows To Try" more={"#"} items={items} />
    </div>
  );
}

export default Home;
