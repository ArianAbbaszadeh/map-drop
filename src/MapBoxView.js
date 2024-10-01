import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
    "pk.eyJ1IjoiYXJpYW5hYmJhc3phZGVoIiwiYSI6ImNtMW9qM3gwZTExdGsydXBzNTQxbTJtcDIifQ.YadjdG3hsqbDA35SCY3MFw";

function MapboxView() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(-89.399999937999956);
    const [lat] = useState(43.076424926000072);
    const [zoom] = useState(17);

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [lng, lat],
            zoom: zoom,
            interactive: false, // Disable all map interactions
        });

        // Remove all controls
        map.current.dragPan.disable();
        map.current.doubleClickZoom.disable();
        map.current.scrollZoom.disable();
        map.current.touchZoomRotate.disable();
    }, [lng, lat, zoom]);

    return (
        <div className="w-[350px] h-[350px]">
            <div ref={mapContainer} style={{ height: "400px" }} />
        </div>
    );
}

export default MapboxView;
