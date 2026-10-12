import React, { useState } from "react";

const RideBooking = () => {

  const [song, setSong] = useState([]);

  const [ride, setRide] = useState({
    name: "",
    gender: "",
    source: "warje",
    destination: "karve",
    cabType: "auto",
    kms: "",
    totalFare: "",
    songs: [],
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    if (type == "checkbox") {
      if (checked) {
        setSong([...song, value]);   
      } else {
        setSong(song.filter((s)=> value != s))
      }
    }

    // solution ---> optimization

    setRide({ ...ride, [name]: type == "number" ? Number(value) : value });
  };

  const handleSubmit = (xyz) => {
    xyz.preventDefault();

    if (ride.source == ride.destination) {
      alert("source and destination cannot be same");
    } else {
      let km;

      if (
        (ride.source == "warje" && ride.destination == "karve") ||
        (ride.source == "karve" && ride.destination == "warje") ||
        (ride.source == "karve" && ride.destination == "kothrud") ||
        (ride.source == "kothrud" && ride.destination == "karve")
      ) {
        km = 5;
      } else {
        km = 10;
      }

      const fare =
        ride.cabType == "auto"
          ? km * 30
          : ride.cabType == "mini"
            ? km * 60
            : km * 120;

      const newRide = { ...ride, kms: km, totalFare: fare, songs: song };
      console.log(newRide);
      clearForm();
    }
  };

  const clearForm = () => {
    setRide({
      name: "",
      gender: "",
      source: "warje",
      destination: "karve",
      cabType: "auto",
      kms: "",
      totalFare: "",
      songs: [],
    });
  };

  return (
    <div>
      <h2>Ride Booking Form</h2>

      <form onSubmit={handleSubmit}>
        Name :{" "}
        <input
          type="text"
          name="name"
          value={ride.name}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        Gender : male :{" "}
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleChange}
          required
        />{" "}
        female :{" "}
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleChange}
          required
        />
        <br />
        <br />
        Source :{" "}
        <select
          name="source"
          value={ride.source}
          onChange={handleChange}
          required
        >
          <option value="warje">warje</option>
          <option value="karve">karve</option>
          <option value="kothrud">kothrud</option>
        </select>
        <br />
        <br />
        Destination :{" "}
        <select
          name="destination"
          value={ride.destination}
          onChange={handleChange}
          required
        >
          <option value="karve">karve</option>
          <option value="warje">warje</option>
          <option value="kothrud">kothrud</option>
        </select>
        <br />
        <br />
        Cab Type :{" "}
        <select
          name="cabType"
          value={ride.cabType}
          onChange={handleChange}
          required
        >
          <option value="auto">Auto</option>
          <option value="mini">Mini</option>
          <option value="sedan">Sedan</option>
        </select>
        <br />
        <br />
        songs : <br />
        <input
          type="checkbox"
          name="songs"
          value={"classical"}
          onChange={handleChange}
        />{" "}
        : Classical <br />
        <input
          type="checkbox"
          name="songs"
          value={"hiphop"}
          onChange={handleChange}
        />{" "}
        : HipHop <br />
        <input
          type="checkbox"
          name="songs"
          value={"rap_songs"}
          onChange={handleChange}
        />{" "}
        : Rap Songs <br />
        <input
          type="checkbox"
          name="songs"
          value={"ghazals"}
          onChange={handleChange}
        />{" "}
        : Ghazals <br />
        <button type="submit">Book Ride</button>
      </form>
    </div>
  );
};

export default RideBooking;
