import "./Home.css"

export default function Home() {
  return <>
    {getPopular()}
    {getMonthly()}
    {getWinners()}
  </>;
}

function getPopular() {
  return (
    <>
    <h2>Highest Ranked</h2>
    <div className="popularContainer">{gameContainer()}{gameContainer()}{gameContainer()}</div>
    </>
  );
}

function getMonthly() {
  return (
    <>
    <h2>This month</h2>
    <div className="monthlyContainer">{gameContainer()}{gameContainer()}{gameContainer()}{gameContainer()}{gameContainer()}{gameContainer()}</div>
    </>
  );
}

function getWinners() {
  return (
    <>
    <h2>Winners</h2>
    <div className="winnersContainer">{gameContainer()}{gameContainer()}{gameContainer()}</div>
    </>
  );
}



function gameContainer() {  
  return (
    <div className="newGameContainer">
      <div className="buttonsContainer">
        <div className="likeButton">
        </div>
        <div className="criticScore"></div>
      </div>
      <div className="nameContainer">
        <span>The Legend of Zelda: Tears of the Kingdom</span>
      </div>
    </div>
  );
}
