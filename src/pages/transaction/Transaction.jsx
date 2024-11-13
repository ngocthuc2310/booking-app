import "./styleTransaction.css";
import { transaction } from "../../linkAPI/linkAPI";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { appContext } from "../../store/appContext";
import { Header2 } from "../../components/Header/Header";
import { FormDangKy } from "../../components/FormDangKy/FormDangKy";
import { Footer } from "../../components/Footer/Footer";

export function Transaction() {
  const [dt, setDt] = useState(null);
  const { getState, setState } = React.useContext(appContext);

  useEffect(() => {
    console.log(getState().email);
    fetch(transaction + "?email=" + getState().email)
      .then((x) => x.json())
      .then((y) => {
        setDt(y);
      })
      .catch((er) => console.log("err: " + er.message));
  }, []);
  console.log("dt", dt);
  return (
    <>
      <Header2 />
      <div className="trstion">
        <h2>Your Transactions</h2>
        <table>
          <tr>
            <th>#</th>
            <th>Hotel</th>
            <th>Room</th>
            <th>Date</th>
            <th>Price</th>
            <th>Payment Method</th>
            <th>Status</th>
          </tr>
          {dt &&
            dt.map((x) => (
              <tr>
                <td>#</td>
                <td>{x.hotel}</td>
                <td>{x.room.map((y) => y + " ,")}</td>
                <td>
                  {datet(new Date(x.dateStart)) +
                    "-" +
                    datet(new Date(x.dateEnd))}{" "}
                </td>
                <td> ${x.price}</td>
                <td>{x.payment}</td>
                <td>{x.status}</td>
              </tr>
            ))}
        </table>
      </div>
      <FormDangKy />
      <Footer />
    </>
  );
}

function datet(dtt) {
  return dtt.getDate() + "/" + dtt.getMonth() + "/" + dtt.getFullYear();
}
