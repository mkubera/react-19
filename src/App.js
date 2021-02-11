import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Lorem from "./Lorem";
import People from "./People";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.data = {
      people: [
        {
          id: 1,
          name: "Marcin",
          img: "https://unsplash.com/photos/ZHsb9tdQHdk/download?w=320",
          alt: "Zebra on savanah",
          displayPhoto: true,
        },
        {
          id: 2,
          name: "Marcin2",
          img: "https://unsplash.com/photos/Zd2SGrMOzdM/download?w=320",
          alt: "Zebra on savanah",
          displayPhoto: true,
        },
        {
          id: 3,
          name: "Kacper",
          img: "https://unsplash.com/photos/gbWnF9X5HJo/download?w=320",
          alt: "Zebra on savanah",
          displayPhoto: true,
        },
      ],
    };

    this.state = {
      nextId: this.data.people.length + 1,
      dataFromNBP: {
        currencies: {
          eur: 1.34,
          usd: 3.33,
          chf: 4.44,
        },
      },
      showHeader: true,
      textFromInputField: "Tutaj juz cos jest",
      people: this.data.people,
    };
  }

  toggleHeader = () => {
    this.setState((state) => ({ showHeader: !state.showHeader }));
  };

  testFunction = (str) => {
    // console.log(str);
    this.setState((state) => ({ textFromInputField: str }));
  };

  addPerson = (person) => {
    // console.log(person);
    this.setState((state) => ({
      nextId: state.nextId + 1,
      people: [...state.people, person],
    }));
  };

  removePerson = (id) => {
    // console.log(id);
    this.setState((state) => ({
      people: state.people.filter((person) => person.id !== id),
    }));
  };

  render() {
    const title = "Dzis Reactujemy";
    const loremText =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eum sequi possimus aut, earum ipsam fuga ipsum! Dolorem eligendi commodi sed. Deserunt illum quis officiis nam velit iusto! Autem, aspernatur!";

    return (
      <div className="App">
        {this.state.showHeader ? (
          <header>
            <img src="https://futurecollars.com/wp-content/uploads/2019/09/logo.svg" />
          </header>
        ) : null}
        <button onClick={this.toggleHeader}>Toggle Header</button>
        <h1>EUR: {this.state.dataFromNBP.currencies.eur}</h1>
        <People
          nextId={this.state.nextId}
          people={this.state.people}
          addPerson={this.addPerson}
          removePerson={this.removePerson}
        />

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
