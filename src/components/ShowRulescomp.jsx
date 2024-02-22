const ShowRules = () => {
  return (
    <div>
      <h2 style={{ paddingLeft: "18px" }}>How to play dice game</h2>
      <div>
        <ul>
          <li>Select any number</li>
          <li>Click on dice image</li>
          <li>
            After click on dice if selected number is equal to dice number you
            will get same point as dice{" "}
          </li>
          <li>
            If you get wrong guess then your attempts remaining would reduce by
            1 until you run out of attempts for each wrong guess and the game's
            over{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShowRules;
