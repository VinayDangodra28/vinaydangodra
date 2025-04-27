import React, { useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';



export const Education = () => {
  const [certificateDescription, setCertificateDescription] = useState(
    "lorem ipsum dolor sit amet consectetur adipiscing elit"
  );
  const [certificateImage, setCertificateImage] = useState("/images/certificates/IBM.png");
  const certificatesData = [
    {
      id: "1",
      title: "Full Stack Web Development",
      school: "IBM (via Coursera)",
      description: "",
      image: "/images/certificates/IBM.png",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/UXTXXR3ENLIP",
    },
    {
      id: "2",
      title: "Python",
      school: "Sololearn",
      description: "",
      image: "/images/certificates/Python_certificate.png",
      link: "https://www.sololearn.com/en/certificates/CT-GEMXPIL1",
    }
  ];
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const certificates = document.querySelectorAll(".certificate");

    certificates.forEach((certificate) => {
      ScrollTrigger.create({
        trigger: certificate,
        start: "50% center",
        end: "150% center",
        // markers: true,
        onEnter: () => {
          const certificateId = certificate.getAttribute("data-id");
          const selectedCertificate = certificatesData.find(
            (cert) => cert.id === certificateId
          );
          if (selectedCertificate) {
            setCertificateDescription(selectedCertificate.description);
            setCertificateImage(selectedCertificate.image);
          }
        },
        onEnterBack: () => {
          const certificateId = certificate.getAttribute("data-id");
          const selectedCertificate = certificatesData.find(
            (cert) => cert.id === certificateId
          );
          if (selectedCertificate) {
            setCertificateDescription(selectedCertificate.description);
            setCertificateImage(selectedCertificate.image);
          }
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);



  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);


    gsap.to("#mca", {
      borderColor: "#007BFF",
      boxShadow: "0px 0px 20px 0px #007BFF, 0px 0px 20px 0px #007BFF inset",
      scrollTrigger: {
        trigger: ".qualifications-list",
        start: "top 25%",
        end: "bottom 25%",
        // scrub: true,
        toggleActions: "restart none none reset",
        invalidateOnRefresh: true,
        // markers: true,
      },
    });

    gsap.to("#bca", {
      borderColor: "#9C27B0",
      boxShadow: "0px 0px 20px 0px #9C27B0, 0px 0px 20px 0px #9C27B0 inset",
      scrollTrigger: {
        trigger: ".qualifications-list",
        start: "20% 25%",
        end: "bottom 25%",
        // scrub: true,
        toggleActions: "restart none none reset",
        invalidateOnRefresh: true,
        // markers: true,
      },
    });


    gsap.to("#hsc", {
      borderColor: "#00C853",
      boxShadow: "0px 0px 20px 0px #00C853, 0px 0px 20px 0px #00C853 inset",
      scrollTrigger: {
        trigger: ".qualifications-list",
        start: "40% 25%",
        end: "bottom 25%",
        // scrub: true,
        toggleActions: "restart none none reset",
        invalidateOnRefresh: true,
        // markers: true,
      },
    });


    gsap.to("#ssc", {
      borderColor: "#FFC107",
      boxShadow: "0px 0px 20px 0px #FFC107, 0px 0px 20px 0px #FFC107 inset",
      scrollTrigger: {
        trigger: ".qualifications-list",
        start: "55% 25%",
        end: "bottom 25%",
        // scrub: true,
        toggleActions: "restart none none reset",
        invalidateOnRefresh: true,
        // markers: true,
      },
    });







  }, []);

  return (
    <div className="education-section-wrapper">
      <div className="education-frame">
        <div className="education-section">
          <div className="education-title section-title">Qualifications & Certificates</div>
          <div className="education-wrapper">
            {/* Qualifications Section */}
            <div className="qualifications">
              <div className="qualifications-list">
                <div
                  className="qualification"
                  id="mca"
                >
                  <div className="qualification-title">
                    MCA - Master in Computer Application
                  </div>
                  <div className="qualification-school">
                    Chandigarh University
                  </div>
                  <div className="qualification-date">2024-2026</div>
                </div>

                <div
                  className="qualification"

                  id="bca"
                >
                  <div className="qualification-title">
                    BCA - Bachelor in Computer Application
                  </div>
                  <div className="qualification-school">
                    Kirandevi Saraf Institute of Complete Learning
                    ~Tilak Maharashtra Vidyapeeth
                  </div>
                  <div className="qualification-date">2021-2024</div>
                </div>

                <div
                  className="qualification"
                  id="hsc"
                >
                  <div className="qualification-title">HSC</div>
                  <div className="qualification-school">
                    BSGD Junior College ~ Maharashtra Board
                  </div>
                  <div className="qualification-date">2020-2021</div>
                </div>

                <div
                  className="qualification"
                  id="ssc"
                >
                  <div className="qualification-title">SSC</div>
                  <div className="qualification-school">
                    Infant Jesus School ~ Maharashtra Board
                  </div>
                  <div className="qualification-date">2018-2019</div>
                </div>
              </div>
            </div>

            {/* Certifications Section */}
            <div className="certificates">
              <div className="certificates-description">
                <div className="certificates-description-inner-wrapper">
                  <div className="certificates-description-content">
                    {/* {certificateDescription}
                     */}
              {certificateImage && (
                <div className="certificate-image">
                  <img src={certificateImage} alt="Selected Certificate" />
                </div>
              )}
                  </div>
                </div>
              </div>
              <div className="certificates-list">
                {certificatesData.map((certificate) => (
                  <div key={certificate.id} className="certificate" data-id={certificate.id}>
                    <div className="certificate-title">{certificate.title}</div>
                    <div className="certificate-school">{certificate.school}</div>
                    <div className="certificate-description">{certificate.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
