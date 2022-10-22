import React from "react";
import "../LandingPage.scss";
import Sigambar1 from "../img/Add-tasks-pana-1.png";
import Sigambar2 from "../img/Add-tasks-bro-1.png";
import Sigambar3 from "../img/Completed-pana 1.png";
import Kanban from "../img/KanbanFill.png";
import DaftarKegiatan from "../img/list-check.png";
import TimTask from "..//img/people-fill.png";
import Catatan from "../img/sticky-fill.png";

const Fitur = () => {
  return (
    <>
      <section className="fitur">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <h2>Perencana Proyek & Berkolaborasi</h2>
              <p>
                Kamu dapat melakukan pekerjaan manajemen tugas, dan juga akan
                mengingatkan Kamu tentang tugas, tenggat waktu, dan dapat
                memantau kemajuan proyek kolaborasi yang sedang dikerjakan
                secara real time di satu tempat pada satu waktu.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src={Sigambar1}
                alt="Gambar"
                className="pictures img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="fitur">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 text-center">
              <img
                src={Sigambar2}
                alt="Gambar"
                className="pictures img-fluid"
              />
            </div>
            <div className="col-md-4">
              <h2>Tingkatkan Kuliatas Kamu Bersama Kami</h2>
              <p>
                Tingkatkan kualitas tim Kamu bersama kami, mulai dari
                peningkatan manajemen waktu, ketepatan dalam menyelesaikan tugas
                dan juga semakin cepat kami menyelesaikan tugas semakin
                kepercayaan klien kepada Kamu dan tim.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="fitur2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <h2>Fitur yang Simple & Mudah Digunakan</h2>
              <p>
                Kamu dapat menggunakan secara fleksibel, Kamu juga dapat
                menggunakannya untuk keperluan pribadi, kantor, dan bisnis.
                Daftar Periksa di Satu Tempat Kamu tidak perlu lagi mengingat
                langkah apa yang harus dilakukan atau cara memesannya karena
                checklist tersedia di satu tempat.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src={Sigambar3}
                alt="Gambar"
                className="pictures img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 mx-auto text-center fitur2">
              <h2>Fitur yang Kamu Bisa Gunakan</h2>
              <br />
              <p>
                Kami memiliki fitur yang dapat dengan mudah digunakan untuk
                mengelola tim Kamu, terutama ketika Kamu dan tim Kamu pertama
                kali menggunakannya sangat mudah.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container fitur3">
          <div className="row">
            <div className="col-md-3">
              <img src={Kanban} alt="Gambar" className="pictures img-fluid" />
              <h2>Kanban</h2>
              <p>
                Kamu dapat melihat tugas yang diselesaikan dan informasi tentang
                tugas, atau proyek.
              </p>
            </div>
            <div className="col-md-3">
              <img
                src={DaftarKegiatan}
                alt="Gambar"
                className="pictures img-fluid"
              />
              <h2>Daftar Kegiatan</h2>
              <p>
                Daftar ini menjelaskan tentang kemajuan proyek yang sedang
                dikerjakan
              </p>
            </div>
            <div className="col-md-3">
              <img src={TimTask} alt="Gambar" className="pictures img-fluid" />
              <h2>Tim Taks</h2>
              <p>
                Kamu dapat melihat proyek yang diselesaikan dan informasi
                bersama tim Kamu
              </p>
            </div>
            <div className="col-md-3">
              <img src={Catatan} alt="Gambar" className="pictures img-fluid" />
              <h2>Catatan</h2>
              <p>
                Kamu dapat membuat sebuah catatan atau kegiatan yang ingin Kamu
                lakukan
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fitur;
