import React from "react";

const Footer = () => {
  const background = {
    backgroundColor: "#60a5fa",
  };
  return (
    <>
      <div class="mt-5 pt-5 pb-5 footer text-dark" style={background}>
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-xs-12 ">
              <center>
                <h4 className="mt-lg-0 mt-sm-3">Gabungin.Com</h4>
                <p class="col-lg-11 text-dark-50">
                  Lorem ipsum dolor sit amet, consectetur adipiscing sed do
                  eiusmod tempor incididunt labore et dolore magna aliqua. Ut
                  enim ad minim veniam.{" "}
                </p>
              </center>
            </div>
            <div class="col-lg-2 col-xs-12 ">
              <h4 class="mt-lg-0 mt-sm-3">Navigation</h4>
              <p class="pr-5 text-dark-50">Home</p>
              <p class="pr-5 text-dark-50">Features</p>
              <p class="pr-5 text-dark-50">Customers</p>
              <p class="pr-5 text-dark-50">About Us</p>
            </div>
            <div class="col-lg-2 col-xs-12 ">
              <h4 class="mt-lg-0 mt-sm-4">Contact</h4>
              <p class="pr-5 text-dark-50">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQMHlQoH4Czy_nRE2n0Fi4T6Onp2bLJa9DQ&usqp=CAU"
                  alt=""
                  width="20px"
                  height="20px"
                />
                +61 234557689{" "}
              </p>
            </div>
            <div class="col-lg-2 col-xs-12 ">
              <h4 class="mt-lg-0 mt-sm-4">Location</h4>
              <p class="pr-5 text-dark-50"> South Jakarta, Indonesia</p>
              <p class="pr-5 text-dark-50">
                Grand Slipi Tower Lt. 42 Jl. S. Parman Kav 22-24
              </p>
              <p class="pr-5 text-dark-50"> 8 A.M - 5 P.M</p>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col copyright">
              <p class="">
                <small class="text-dark-50">
                  <center>© 2022 Gabungin.Com All Rights Reserved.</center>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
