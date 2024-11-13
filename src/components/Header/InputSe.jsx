import "./styleHe/styleInSe.css";
import { Button2 } from "../UI/Button/Button";
import { DateRange } from "react-date-range";
import React, { useRef, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useNavigate } from "react-router-dom";
import { appContext } from "../../store/appContext";

function inputText(e) {}
function inputDate(e) {}
function inputAdult(e) {}
function inputChildren(e) {}
function inputRoom(e) {}
function clickSearch(e) {}

let selectionRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

function InputSe() {
  const nav = useNavigate();
  const [displayDate, setDisplayDate] = useState("none");
  const [startDate, setStartDate] = useState(selectionRange.startDate);
  const [endDate, setEndtDate] = useState(selectionRange.endDate);
  const { getState, setState } = React.useContext(appContext);
  const refCity = useRef("");
  const refCountRoom = useRef(0);
  const refMaxPeople = useRef(0);

  function clickSearch() {
    setState((x) => {
      x.search.city = refCity.current.value;
      x.search.countRoom = refCountRoom.current.value;
      x.search.maxPeople = refMaxPeople.current.value;
    });
    nav("/search");
  }

  function clickTextInput() {
    setDisplayDate("block");
  }

  function handleSelect(ranges) {
    setEndtDate(ranges.selection.endDate);
    setDisplayDate("none");
  }

  return (
    <div className="inputse">
      <div style={{ display: "flex" }}>
        <i className="fa fa-bed"></i>
        <input
          className="where"
          type="text"
          onInput={inputText}
          placeholder=" Where are you going"
          ref={refCity}
        />
      </div>

      <div style={{ display: "flex" }} className="date0">
        <i className="fa fa-calendar"></i>
        <input
          className="date2"
          type="text"
          placeholder={`${startDate.getDate()}/${
            startDate.getMonth() + 1
          }/${startDate.getFullYear()}  to  continues`}
          value={
            startDate.getFullYear() != endDate.getFullYear() ||
            startDate.getMonth() != endDate.getMonth() ||
            startDate.getDate() != endDate.getDate()
              ? `${startDate.getDate()}/${
                  startDate.getMonth() + 1
                }/${startDate.getFullYear()}  to  ${endDate.getDate()}/${
                  endDate.getMonth() + 1
                }/${endDate.getFullYear()}`
              : ""
          }
          onClick={clickTextInput}
        />
        <div style={{ display: displayDate }} className="date3">
          <DateRange
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            className="date"
            minDate={new Date()}
            onChange={handleSelect}
            ranges={[selectionRange]}
          />
        </div>
      </div>

      <div className="num">
        <div style={{ display: "flex" }}>
          <i className="fa fa-female"></i>
          <input
            type="number"
            onInput={inputAdult}
            placeholder="1 adult"
            min={"1"}
            ref={refMaxPeople}
          />
        </div>
        <div style={{ display: "flex" }}>
          <input
            type="number"
            onInput={inputChildren}
            placeholder={"0 children"}
            min={"0"}
          />
        </div>
        <div style={{ display: "flex" }}>
          <input
            type="number"
            onInput={inputRoom}
            placeholder="1 room"
            min={"1"}
            ref={refCountRoom}
          />
        </div>
      </div>
      <Button2
        onClick={(e) => {
          e.preventDefault();
          clickSearch();
        }}
      >
        Search
      </Button2>
    </div>
  );
}
export default InputSe;
