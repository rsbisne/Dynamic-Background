import React, { useEffect } from "react";
import "./index.css";
const DynamicBackground = () => {
  useEffect(() => {
    const section = document.querySelector("section");
    const images = document.querySelectorAll("img");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            section.style.backgroundColor =
              entry.target.getAttribute("data-color");
          }
        });
      },
      {
        threshold: 0.7,
      }
    );

    images.forEach((el, i) => {
      observer.observe(el);
    });
  }, []);

  return (
    <section>
      <img
        src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2168&q=80"
        data-color="#f1bace"
        alt="img1"
      />
      <img
        src="https://images.unsplash.com/photo-1516085216930-c93a002a8b01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
        data-color="#ffbc00"
        alt="img2"
      />
      <img
        src="https://images.unsplash.com/photo-1458819714733-e5ab3d536722?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80"
        data-color="#cfdfde"
        alt="img3"
      />
      <img
        src="https://images.unsplash.com/photo-1520013817300-1f4c1cb245ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2287&q=80"
        data-color="#3c94c5"
        alt="img4"
      />
      <img
        src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2247&q=80"
        data-color="#99aba0"
        alt="img5"
      />
      <img
        src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"
        data-color="#b0e6db"
        alt="img6"
      />
      <img
        src="https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80"
        data-color="#fe6f62"
        alt="img7"
      />
    </section>
  );
};

export default DynamicBackground;
