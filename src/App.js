import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Lorem from "./Lorem";
import People from "./People";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textFromInputField: "Tutaj juz cos jest",
      people: [
        {
          id: 1,
          name: "Marcin",
          img: "https://unsplash.com/photos/ZHsb9tdQHdk/download?w=320",
          alt: "Zebra on savanah",
          displayPhoto: !true,
        },
        {
          id: 2,
          name: "Marcin2",
          img: "https://unsplash.com/photos/Zd2SGrMOzdM/download?w=320",
          alt: "Zebra on savanah",
          displayPhoto: !true,
        },
        {
          id: 3,
          name: "Kacper",
          img: "https://unsplash.com/photos/gbWnF9X5HJo/download?w=320",
          alt: "Zebra on savanah",
          displayPhoto: !true,
        },
      ],
    };
  }

  testFunction = (str) => {
    console.log(str);
    this.setState((state) => ({ textFromInputField: str }));
  };

  render() {
    const title = "Dzis Reactujemy";
    const loremText =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eum sequi possimus aut, earum ipsam fuga ipsum! Dolorem eligendi commodi sed. Deserunt illum quis officiis nam velit iusto! Autem, aspernatur!";

    return (
      <div className="App">
        <People people={this.state.people} />

        <div>{this.state.textFromInputField}</div>
        <Lorem
          testFunction={this.testFunction}
          color="blue"
          text={loremText}
          pd={20}
        />
      </div>
    );
  }
}

export default App;
