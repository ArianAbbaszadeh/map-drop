import React, { useState, useRef, useEffect } from "react";
import { FcAddImage } from "react-icons/fc";
import mapboxgl from "mapbox-gl";
import MapboxView from "./MapBoxView";

const fileTypes = ["JPG", "PNG"];

function UploadScreen() {
    const [file, setFile] = useState(null);
    const [imageURL, setImageURL] = useState("");

    useEffect(() => {
        if (file) {
            const url = URL.createObjectURL(file);
            setImageURL(url);
            return () => URL.revokeObjectURL(url);
        }
    }, [file]);

    function handleChange(e) {
        if (e.target.files && e.target.files[0]) {
            console.log(e.target.files);
            setFile(e.target.files[0]);
        }
    }

    return (
        <div className="flex flex-col items-center">
            <label
                htmlFor="file-upload"
                className="h-[100px] w-[450px] border-white border-4 border-dashed rounded-xl bg-slate-700 text-slate-50 p-3 m-3 flex flex-row items-center justify-around cursor-pointer pr-4 font-[Poppins]"
            >
                <FcAddImage className="h-fit w-[80px]" />
                <div className="text-lg">
                    {" "}
                    {imageURL
                        ? "Image Uploaded"
                        : "Upload a floor plan to get started"}
                </div>
                <input
                    id="file-upload"
                    type="file"
                    accept={fileTypes
                        .map((type) => `.${type.toLowerCase()}`)
                        .join(",")}
                    onChange={handleChange}
                    style={{ display: "none" }}
                />
            </label>
            {imageURL && <MapboxView />}
        </div>
    );
}

export default UploadScreen;
