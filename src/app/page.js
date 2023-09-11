"use client";
import Image from "next/image";
import MainContainer from "./components/Main/MainContainer";
import styles from "./page.module.css";
//GoogleMap
import { useLoadScript } from "@react-google-maps/api";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao",
    libraries: ["places"],
  });
  return isLoaded && <MainContainer />;
}
