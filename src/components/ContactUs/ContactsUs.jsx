import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../../components/ContactUs/contact.css";
import "./contact.css";

const ContactsUs = () => {
  return (
    <Box>
      <Grid sx={{ display: "flex", justifyContent: "center" }}>
        <h1
          style={{
            // marginTop: "30px",
            background: "#1976d2",
            width: "100%",
            textAlign: "center",
            color: "#fff",
            fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
            boxShadow: "0 1px 10px 3px #1976d2,",
            fontWeight: 400,
          }}
        ></h1>
      </Grid>

      <div className="block__photo">
        <img
          src="https://www.slashgear.com/img/gallery/the-real-reason-the-apple-logo-has-a-bite-out-of-it/l-intro-1656873003.jpg"
          alt=""
        />
      </div>

      <div
        style={{ display: "flex", marginTop: "50px", justifyContent: "center" }}
      >
        <div
          className="block__nav"
          style={{
            display: "flex",
            width: "100%",
            padding: "5px",
            justifyContent: "space-around",
            fontSize: "20px",
            fontWeight: 600,
            borderTop: "1px solid black",
          }}
        >
          <p>Номера</p>
          <p>Режим работы</p>
          <p>Филлиалы</p>
        </div>
      </div>

      <div className="block">
        <div className="info">
          <div id="phone"></div>
          <p style={{ fontWeight: 600, fontSize: "18px" }}>
            Смартфоны и аксессуары:
          </p>
          <p style={{ color: "gray" }}>+(996) 706891054; 559891054</p>
          <p style={{ fontWeight: 600, fontSize: "18px" }}>
            Компьютеры и часы :
          </p>
          <p>+(996) 505891054</p>
          <p style={{ fontWeight: 600, fontSize: "18px" }}>
            Гаджеты и товары для телефонов:
          </p>
          <p>+(996) 704891054</p>
          <p style={{ fontWeight: 600, fontSize: "18px" }}>
            Сервис центр "Apple.com":
            <br />
          </p>
          <p>+(996) 705891054; 709306507</p>
        </div>
        <div className="info">
          <div id="time"></div>
          <p style={{ fontWeight: 600, fontSize: "18px" }}>Режим работы</p>
          <p style={{ color: "gray" }}>Отдел продаж:</p>
          <p style={{ fontWeight: 600, fontSize: "18px" }}>
            с 10:00 до 23:00 Без выходных
          </p>
          <p>Сервис центр :</p>
          <p style={{ fontWeight: 600, fontSize: "18px" }}>
            с 10:00 до 17:00 Без выходных
          </p>
        </div>
        <div className="info">
          <div id="home"></div>
          <p style={{ fontWeight: 600, fontSize: "18px" }}>Магазин iStore</p>
          <p style={{ color: "gray" }}>
            Кыргызстан г. Бишкек <br />
            40 просп. Манаса, Бишкек 720001
          </p>
          <p style={{ fontWeight: 600, fontSize: "18px" }}>
            Предложения и жалобы:
          </p>
          <p>iStore@.kg</p>
        </div>
      </div>

      <div className="map">
        {/* <iframe
          src="<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11695.459011907646!2d74.5704513395508!3d42.8756987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec8218dfa45a5%3A0x1ee558afd372ffe5!2siStore!5e0!3m2!1sru!2skg!4v1673245023876!5m2!1sru!2skg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>"
          style={{
            width: "80%",
            height: "550px",
            border: "0px",
            marginBottom: "50px",
          }}
        ></iframe> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11695.459011907646!2d74.5704513395508!3d42.8756987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec8218dfa45a5%3A0x1ee558afd372ffe5!2siStore!5e0!3m2!1sru!2skg!4v1673245023876!5m2!1sru!2skg"
          width={"90%"}
          height={550}
          //   style={{ border: 0 }}
          //   loading="lazy"
          //   referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Box>
  );
};

export default ContactsUs;
