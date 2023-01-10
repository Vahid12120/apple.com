import { margin } from "@mui/system";
import React from "react";
// import "./AboutUs.css";
// https://www.youtube.com/watch?v=kwlOAeFLKH0
import "./AboutUs.css";
import AppleIcon from "@mui/icons-material/Apple";

const AboutUs = () => {
  return (
    <div id="full-block">
      <div className="img" style={{ width: "100%", height: "800px" }}>
        <h4 className="text1" style={{ color: "white" }}>
          {" "}
        </h4>
      </div>

      <p id="text-2" style={{ color: "black", fontSize: "20px" }}>
        Apple («Эпл») — американская корпорация, производитель персональных и
        планшетных компьютеров, аудиоплееров, смартфонов, программного
        обеспечения и цифрового контента. Один из пионеров в области
        персональных компьютеров[10] и современных многозадачных операционных
        систем с графическим интерфейсом. Штаб-квартира — в Купертино, штат
        Калифорния. Благодаря инновационным технологиям и эстетичному дизайну
        корпорация Apple создала в индустрии потребительской электроники
        уникальную репутацию, сравнимую с культом[11]. В августе 2018 года стала
        первой американской компанией, чья капитализация превысила 1 трлн
        долларов США, и самой дорогой публичной компанией за всю историю, обойдя
        предыдущего рекордсмена — компанию PetroChina (1,005 трлн долларов в
        ноябре 2007 года)[12][13]. В январе 2022 года Apple стала первой
        компанией в мире, рыночная капитализация которой достигла 3 триллионов
        долларов США[14][15]. В 2018 году заняла третье место в списке 500
        лучших работодателей мира по мнению журнала Forbes[16].
      </p>
      <br />

      <img
        style={{ width: "100%" }}
        src="https://s0.rbk.ru/v6_top_pics/media/img/1/79/756625768322791.jpg"
        alt=""
      />
      <img
        style={{ width: "100%" }}
        src="https://ichef.bbci.co.uk/news/976/cpsprodpb/11CC7/production/_126630927_apple-iphone-14-pro-iphone-14-pro-max-hero-220907.jpg"
        alt=""
      />
      <div className="block">
        <div className="info">
          <div id="apple"></div>
          <br />
          <p style={{ fontWeight: 600, fontSize: "18px" }}>Shop and Learn</p>
          <p style={{ color: "gray" }}>Store</p>
          <p style={{ color: "gray" }}>Mac</p>
          <p style={{ color: "gray" }}>Ipad</p>
          <p style={{ color: "gray" }}>iPhone</p>
          <p style={{ color: "gray" }}>Watch</p>
          <p style={{ color: "gray" }}>AirPods</p>
          <p style={{ color: "gray" }}>TV & Home</p>
          <p style={{ color: "gray" }}>AirTag</p>
          <p style={{ color: "gray" }}>Accessories</p>
          <p style={{ color: "gray" }}>Gift Cards</p>
        </div>

        <div className="info">
          <div></div>

          <p style={{ color: "gray" }}></p>
          <p style={{ fontWeight: 600, fontSize: "18px" }}>Service</p>
          <p style={{ color: "gray" }}>Apple Music</p>
          <p style={{ color: "gray" }}>Apple TV+</p>
          <p style={{ color: "gray" }}>Apple Fitness+</p>
          <p style={{ color: "gray" }}>Apple News+</p>
          <p style={{ color: "gray" }}>Apple Arcade</p>
          <p style={{ color: "gray" }}>iCloud</p>
          <p style={{ color: "gray" }}>Apple one</p>
          <p style={{ color: "gray" }}>Aplle Card</p>
          <p style={{ color: "gray" }}>Apple Books</p>
          <p style={{ color: "gray" }}>Apple Podacts</p>
          <p style={{ color: "gray" }}>App store</p>
        </div>
        <div className="info">
          <div></div>

          <p style={{ fontWeight: 600, fontSize: "18px" }}>Apple Store</p>
          <p style={{ color: "gray" }}>Find a Store</p>
          <p style={{ color: "gray" }}>Genius Bar</p>
          <p style={{ color: "gray" }}>Today at Apple</p>
          <p style={{ color: "gray" }}>Apple Camp</p>
          <p style={{ color: "gray" }}>Apple Store App</p>
          <p style={{ color: "gray" }}>Refurbished and Clearance</p>
          <p style={{ color: "gray" }}>Financing</p>
          <p style={{ color: "gray" }}>Apple Trade In</p>
          <p style={{ color: "gray" }}>Order Status</p>
          <p style={{ color: "gray" }}>Shopping Help</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
