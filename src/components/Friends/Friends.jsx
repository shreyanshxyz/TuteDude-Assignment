import React from "react";
import style from "./friends.module.css";
import arrow from "./svg/arrow.svg";
import { Link } from "react-router-dom";
import { data } from "./data/data";

// Component to display friends referred information
const Friends = () => {
  return (
    <div className={style.MainDiv}>
      {/* Navigation links */}
      <p style={{ textAlign: "left" }}>
        <Link to="/">UI/UX</Link> {">"} <Link to="/">Refer & Earn</Link> {">"}{" "}
        <Link to="/friends">Friends Referred</Link>
      </p>
      {/* Go back link */}
      <Link to="/">
        <h3 className={style.goBack}>
          <img src={arrow} alt="arrow" />
          go back
        </h3>
      </Link>
      <div className={style.ReferralDiv}>
        {/* Referral code */}
        <div className={style.ReferralCode}>
          <h3>Your Referral Code </h3>
          <p style={{ padding: "10px", fontWeight: "600" }}>&nbsp;EDCH54</p>
        </div>
        {/* Wallet balance */}
        <div className={style.Wallet}>
          <p>Wallet Balance</p>
          <h2>₹ 500</h2>
        </div>
      </div>

      <div className={style.mainDiv}>
        {/* Heading */}
        <h3>Friends who Enrolled ({data.length})</h3>

        {/* Display cards for each friend */}
        <div className={style.CardMainDiv}>
          {data.map((el, i) => (
            <div key={i}>
              <div className={style.CardNameTime}>
                {/* Friend's name */}
                <h3>{el.name}</h3>
                {/* Enrolled time */}
                <p>{el.time}</p>
              </div>
              {/* Number of courses enrolled */}
              <p>Courses Enrolled ({el.courses.length})</p>
              <div className={style.courses}>
                {/* Display enrolled courses */}
                {el.courses &&
                  el.courses.map((el, i) => (
                    <div>
                      <p key={i}>{el}</p>
                    </div>
                  ))}
              </div>
              {/* Referral amount */}
              <h2>
                Referral Amount <span>₹{el.amount}</span>{" "}
              </h2>
            </div>
          ))}
        </div>
        {/* Footer */}
        <p className={style.footer}>Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Friends;
