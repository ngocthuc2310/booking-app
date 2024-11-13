import "./styleBook.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState } from "react";
import { Header2 } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { FormDangKy } from "../../components/FormDangKy/FormDangKy";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { book, updateuser } from "../../linkAPI/linkAPI";
import React from "react";
import { appContext } from "../../store/appContext";
import { useRef } from "react";
import { booking } from "../../linkAPI/linkAPI";

export function Booking() {
  const { getState, setState } = React.useContext(appContext);
  const [tien, setTien] = useState(0);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [soNgay, setSoNgay] = useState(0);
  const param = useParams();
  const [dt, setDT] = useState(null);
  const refFullname = useRef("");
  const refRoomm = useRef([]);
  const refPhoneNumber = useRef("");

  function book1() {
    const objt = {
      _id: getState().userId,
      phonenumber: refPhoneNumber.current.value,
      fullname: refFullname.current.value,
    };
    fetch(updateuser, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objt),
    })
      .then((x) => x.json())
      .then((y) => {
        console.log("y.msg:", y.msg);
      })
      .catch((er) => console.log(er));
    const obj = {
      user: getState().email,
      hotel: param.id,
      room: refRoomm.current,
      dateStart: date[0].startDate,
      dateEnd: date[0].endDate,
      price: soNgay * tien,
      payment: "banking",
      status: "checked",
    };
    fetch(booking, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((x) => x.json())
      .then((y) => alert(y.msg))
      .catch((er) => alert(er.message));
  }

  useEffect(() => {
    const soNgay =
      (date[0].endDate - date[0].startDate) / (60 * 60 * 1000 * 24);
    setSoNgay(soNgay);
  }, [date]);

  useEffect(() => {
    fetch(book, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: param.id }),
    })
      .then((x) => x.json())
      .then((y) => {
        const z = y.map((x) => {
          return { ...x, class: "t" + Math.trunc(Math.random() * 100 + 1) };
        });
        setDT(z);
      })
      .catch((er) => alert(er.message));
  }, []);
  useEffect(() => {
    let ti = [],
      i = -1,
      roomm = [];
    dt &&
      dt.forEach((x) => {
        ti.push({ tien: 0 });
        i++;
        const j = i;
        document.querySelectorAll("." + x.class).forEach((y) => {
          let tt = 0;
          y.addEventListener("click", () => {
            let sophong = 0,
              roomm = [];
            document.querySelectorAll("." + x.class).forEach((z) => {
              if (z.checked == true) {
                sophong++;
                roomm.push(z.value);
              }
            });
            ti[j].tien = x.price * sophong;
            const result = ti.reduce(function (kq, num) {
              return kq + num.tien;
            }, 0);
            setTien(result);
            refRoomm.current = roomm;
          });
        });
      });
  }, [dt]);
  return (
    <>
      <Header2 />
      <div className="booking">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (getState().isLogin) book1();
            else alert("Chưa đang nhập");
          }}
        >
          <div className="date">
            <div className="dt">
              <h2>Dates</h2>
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                minDate={new Date()}
              />
            </div>

            <div className="user">
              <h2>Reserve Info</h2>
              <div>Your Full Name:</div>
              <input
                type="text"
                placeholder="full name"
                ref={refFullname}
                required
              />
              <div>Your Email</div>
              <input
                type="text"
                placeholder="email"
                value={getState().email}
                required
              />
              <div>Your Phone Number</div>
              <input
                type="number"
                placeholder="phone number"
                ref={refPhoneNumber}
                required
              />
              <div>Your Identity Cart Number</div>
              <input type="text" placeholder="cart number" />
            </div>
          </div>
          <h2>Select Rooms</h2>
          <div className="select">
            {dt &&
              dt.map((x) => (
                <div>
                  <div className="tttt">
                    <h4>{x.title}</h4>
                    <h3>{x.desc}</h3>
                    <h6>Max people: {x.maxPeople}</h6>
                    <h3>${x.price}</h3>
                  </div>
                  <div className="room">
                    {x.roomNumbers.map((y) => (
                      <div className="check">
                        <div>{y}</div>
                        <div>
                          <input
                            type="checkbox"
                            className={"" + x.class}
                            value={y}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <input type="hidden" />
                  {/* ------------------------------ */}
                </div>
              ))}
          </div>
          <h2>Total Bill: ${soNgay * tien}</h2>
          <select name="" id="">
            <option value="">Select Payment Method</option>
          </select>
          <button type="submit" className="buttontt">
            Reserve Now
          </button>
        </form>
      </div>
      <FormDangKy />
      <Footer />
    </>
  );
}
