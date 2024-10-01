import "./App.css";
import MapboxView from "./MapBoxView";
import UploadScreen from "./UploadScreen";
import React, { useState } from "react";

function App() {
    return (
        <div className="bg-slate-800 min-h-screen flex flex-col items-center justify-center">
            <UploadScreen />
        </div>
    );
}

export default App;
