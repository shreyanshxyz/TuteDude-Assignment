import React from "react";
import { Link } from "react-router-dom";
import style from "./home.module.css";
import { data } from "./data/data";

// Component to display the home page
const Home = () => {
  return (
    <div className={style.MainDiv1}>
      {/* Navigation links */}
      <p>
        <Link className={style.TopLink} to="/">
          UI/UX
        </Link>{" "}
        {">"} <Link to="/">Refer & Earn</Link>
      </p>

      <div className={style.MainDiv2}>
        <div>
          {/* Referral Earning */}
          <div className={style.Box1}>
            <p>Referral Earning</p>
            <h2>₹ 2,500</h2>
          </div>
          {/* Total Referrals */}
          <div className={style.Box2}>
            <p>Total Referrals</p>
            <h2>7</h2>
          </div>
          {/* Wallet Balance */}
          <div className={style.Box3}>
            <p>Wallet Balance</p>
            <h2>₹ 500</h2>
          </div>
          {/* Withdraw Balance */}
          <div className={style.Box4}>
            <p>Withdraw Balance</p>
          </div>
        </div>

        <div className={style.ReferralBox}>
          {/* Your Referral Code */}
          <h3 className={style.ReferralMargin}>Your Referral Code</h3>
          <div>
            {/* Referral Code */}
            <h4 className={style.ReferralCode}>&emsp;EDCH54</h4>
          </div>
        </div>
      </div>

      <div className={style.MainDiv}>
        {/* Heading */}
        <h2>How does it work ?</h2>
        <div className={style.MapDiv}>
          {/* Display data */}
          {data.map((x, i) => (
            <div key={i}>
              {/* Image */}
              <img src={x.image} alt={x.image} />
              <div className={style.titledDiv}>
                {/* Title */}
                <h2>{x.title}</h2>
                {/* Description */}
                <p>{x.description}</p>
              </div>
            </div>
          ))}
        </div>
        <footer className={style.footer}>
          <p>
            {/* Link to friends who enrolled */}
            <Link to="/friends">Friends Who Enrolled </Link>
          </p>
          {/* Terms & Conditions */}
          <p>Terms & Conditions</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
