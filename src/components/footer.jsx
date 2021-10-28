import React, { memo } from "react";

function Footer() {
  const footerArr = [
    '"Pair Programming is better than not Pair Programming" -somebody, probably',
    '"Keep calm and pair program" -Elon Musk',
    '"He\'s the best gamer I ever saw" -Technoblade',
    '"I walk a lonely road, unless I am pair programming" -Blue Day',
  ];
  function randoIndex() {
    return Math.floor(Math.random() * footerArr.length);
  }
  return (
    <footer>
      <p className="footer-qoute">{footerArr[randoIndex()]}</p>
    </footer>
  );
}
export default memo(Footer);
