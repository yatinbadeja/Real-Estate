import CardJs from "./Components/Card.js";
import Card1 from "./Components/Photos/cardImage1.png";
import Card2 from "./Components/Photos/cardImage2.png";
import Card3 from "./Components/Photos/cardImage3.png";
import Card4 from "./Components/Photos/cardImage4.png";
import Card5 from "./Components/Photos/cardImage5.png";
import Card6 from "./Components/Photos/cardImage6.png";
import Card7 from "./Components/Photos/cardImage7.png";
import Card8 from "./Components/Photos/cardImage8.png";
import Card9 from "./Components/Photos/cardImage9.png";
// import Card10 from './Components/Photos/featuresImage1.png'
// import Card11 from './Components/Photos/featuresImage2.png'
// import Card12 from './Components/Photos/mainBackground.png'
import Footer from "./Components/footer.js";
import Unique from "./Components/unique.js";
import "./App.css";
import Modern from "./Components/Modern.js";
import Subscribe from "./Components/Subscribe.js";
import Gap from "./Components/gap.js";
import Header from "./Header.js";
import Bar from "./LogoBar.js";
// import Woods from './Components/Photos/uZkQ64.jpg'
// import Mode from "./Components/Mode.js";
function App() {
  let Card = [
    {
      Image: Card1,
      Price: "$212,900",
      Content: "Blissful Abodes",
    },
    {
      Image: Card2,
      Price: "$789,500",
      Content: "Elite Dwellings",
    },
    {
      Image: Card3,
      Price: "$269,120",
      Content: "Estate Enclave",
    },
    {
      Image: Card4,
      Price: "$545,230",
      Content: "State Retreats",
    },
    {
      Image: Card5,
      Price: "$495,120",
      Content: "Opulent Oasis",
    },
    {
      Image: Card6,
      Price: "$269,450",
      Content: "Elegant Estates",
    },
    {
      Image: Card7,
      Price: "$285,550",
      Content: "Elite Enclaves",
    },
    {
      Image: Card8,
      Price: "$225,450",
      Content: "Royal Retreats",
    },
    {
      Image: Card9,
      Price: "$905,786",
      Content: "Estate Oasis",
    },
  ];
  return (
    <>
      {/* <Mode /> */}
      <Header />
      <Bar />
      <Gap />
      <div className="App">
        <h1 style={{ fontSize: "60px", textAlign: "center" }}>
          Our Best Estate, are Modern!
        </h1>
        <div className="row1">
          <CardJs
            Image={Card[0].Image}
            Price={Card[0].Price}
            Content={Card[0].Content}
          ></CardJs>
          <CardJs
            Image={Card[1].Image}
            Price={Card[1].Price}
            Content={Card[1].Content}
          ></CardJs>
          <CardJs
            Image={Card[2].Image}
            Price={Card[2].Price}
            Content={Card[2].Content}
          ></CardJs>
        </div>

        <div className="row2">
          <CardJs
            Image={Card[3].Image}
            Price={Card[3].Price}
            Content={Card[3].Content}
          ></CardJs>
          <CardJs
            Image={Card[4].Image}
            Price={Card[4].Price}
            Content={Card[4].Content}
          ></CardJs>
          <CardJs
            Image={Card[5].Image}
            Price={Card[5].Price}
            Content={Card[5].Content}
          ></CardJs>
        </div>

        <div className="row3">
          <CardJs
            Image={Card[6].Image}
            Price={Card[6].Price}
            Content={Card[6].Content}
          ></CardJs>
          <CardJs
            Image={Card[7].Image}
            Price={Card[7].Price}
            Content={Card[7].Content}
          ></CardJs>
          <CardJs
            Image={Card[8].Image}
            Price={Card[8].Price}
            Content={Card[8].Content}
          ></CardJs>
        </div>

        <div className="row11">
          <CardJs
            Image={Card[0].Image}
            Price={Card[0].Price}
            Content={Card[0].Content}
          ></CardJs>
          <CardJs
            Image={Card[1].Image}
            Price={Card[1].Price}
            Content={Card[1].Content}
          ></CardJs>
        </div>

        <div className="row21">
          <CardJs
            Image={Card[2].Image}
            Price={Card[2].Price}
            Content={Card[2].Content}
          ></CardJs>
          <CardJs
            Image={Card[3].Image}
            Price={Card[3].Price}
            Content={Card[3].Content}
          ></CardJs>
        </div>

        <div className="row31">
          <CardJs
            Image={Card[4].Image}
            Price={Card[4].Price}
            Content={Card[4].Content}
          ></CardJs>
          <CardJs
            Image={Card[5].Image}
            Price={Card[5].Price}
            Content={Card[5].Content}
          ></CardJs>
        </div>

        <div className="row41">
          <CardJs
            Image={Card[6].Image}
            Price={Card[6].Price}
            Content={Card[6].Content}
          ></CardJs>
          <CardJs
            Image={Card[7].Image}
            Price={Card[7].Price}
            Content={Card[7].Content}
          ></CardJs>
        </div>
      </div>
      <Gap />
      <Gap />
      <Modern />
      <Gap />
      <Unique />
      <Gap />
      <Subscribe />
      <Gap />
      <Footer />
    </>
  );
}
export default App;
