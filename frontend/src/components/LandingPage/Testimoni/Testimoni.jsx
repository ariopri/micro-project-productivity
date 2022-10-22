import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const Testimoni = () => {
  return (
    <>
      <div className="bg-light">
        <Container>
          <div class="row text-center ">
            <div class="col-md-12 ">
              <div
                id="carouselBasicExample"
                class="carousel slide carousel-dark mt-4 "
                data-mdb-ride="carousel"
              >
                <h2 class="pt-5">Kepercayaan Pelanggan</h2>
                <Carousel>
                  <Carousel.Item interval={1000}>
                    <div class="mt-5 mb-5">
                      <p class="text-muted mb-2">
                        <strong class="text-success fs-4">Jessica</strong>
                      </p>
                      <p class="fs-5">Universitas Gadjah Mada</p>

                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                        class="mt-4 rounded-circle img-fluid shadow-1-strong"
                        alt="smaple image"
                        width="100"
                        height="100"
                      />
                      <Carousel.Caption class="mt-4">
                        <p class="lead font-italic mx-4 mx-md-5 fst-italic">
                          Company was very helpful, helping me to connect with
                          pottential prospects. I was able to signifficantly
                          improve my business. As well as expand my network.
                        </p>
                      </Carousel.Caption>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item interval={1000}>
                    <div class="mt-5 mb-5">
                      <p class="text-muted mb-2">
                        <strong class="text-success fs-4">
                          Muhammad Harist
                        </strong>
                      </p>
                      <p class="fs-5">Universitas Indonesia</p>

                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
                        class="mt-4 rounded-circle img-fluid shadow-1-strong"
                        alt="smaple image"
                        width="100"
                      />
                      <Carousel.Caption class="mt-4">
                        <p class="lead font-italic mx-4 mx-md-5 fst-italic">
                          Company was very helpful, helping me to connect with
                          pottential prospects. I was able to signifficantly
                          improve my business. As well as expand my network.
                        </p>
                      </Carousel.Caption>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item interval={1000}>
                    <div class="mt-5 mb-5">
                      <p class="text-muted mb-2">
                        <strong class="text-success fs-4">Alma</strong>
                      </p>
                      <p class="fs-5">Institut Pertanian Bogor</p>

                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                        class="mt-4 rounded-circle img-fluid shadow-1-strong"
                        alt="smaple image"
                        width="100"
                        height="100"
                      />
                      <Carousel.Caption class="mt-4">
                        <p class="lead font-italic mx-4 mx-md-5 fst-italic">
                          Company was very helpful, helping me to connect with
                          pottential prospects. I was able to signifficantly
                          improve my business. As well as expand my network.
                        </p>
                      </Carousel.Caption>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Testimoni;
