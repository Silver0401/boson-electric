"use client";

import React from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

const GMaps = () => {
  return (
    <div className="mapContainer">
      <APIProvider apiKey={"AIzaSyCLK4wlMhNfLl93M-BsUB8l1cfBADDPkYY"}>
        <Map
          style={{ width: "100%", height: "100%" }}
          defaultCenter={{ lat: 22.54992, lng: 0 }}
          defaultZoom={3}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        />
      </APIProvider>
    </div>
  );
};

export default GMaps;
