import React from "react"
import Container from "../Container"
import infoImg from "../../assets/infoImg.png"
import Button from "../Button"

const Info = () => {
  return (
    <section>
      <Container>
        <div className="section__top text-center mb-20">
          <h2>
            Мебельные туры <span className="text-white">в Фошань под ключ</span>
          </h2>
          <p className="text-white">
            Предоставляем <span>полный спектр услуг</span> и несём полную
            ответственность на каждом этапе:
          </p>
        </div>

        <div className="text-3xl">
          <ol className="custom-counter flex text-white justify-between ">
            <div style={{maxWidth: "35rem"}}>
              <li className="mb-20 relative">
                <p>
                  <strong>Организация поездки</strong>
                </p>
                <p>От оформления визы до бронирования гостиницы</p>
                <div
                  style={{
                    top: "1rem",
                    left: "8rem",
                  }}
                  className="absolute"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="370"
                    height="56"
                    viewBox="0 0 385 56"
                    fill="none"
                  >
                    <path
                      d="M0 1H339C363.853 1 384 21.1472 384 46V56"
                      stroke="#F0D683"
                    />
                  </svg>
                </div>
              </li>
              <li className="mb-20 relative">
                <p>
                  <strong>Контроль качества</strong>
                </p>
                <p>
                  Не просто оформляем, а выполняем тщательную проверку: на
                  складе производителя и перед отправкой. Предоставляем вам
                  видео и фотоотчёт перед отправкой
                </p>
                <div
                  style={{
                    top: "1rem",
                    left: "8rem",
                  }}
                  className="absolute"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="360"
                    height="110"
                    viewBox="0 0 384 110"
                    fill="none"
                  >
                    <path
                      d="M0 1H248.534C273.387 1 293.534 21.1472 293.534 46V64C293.534 88.8528 313.681 109 338.534 109H384"
                      stroke="#F0D683"
                    />
                  </svg>
                </div>
              </li>
              <li className="mb-20 relative">
                <p>
                  <strong>Оформление документов</strong>
                </p>
                <p>
                  Готовим все сопроводительные бумаги, выполняем растаможивание
                  и доставляем товары прямо до вашей двери
                </p>
                <div
                  style={{
                    top: "1rem",
                    left: "8rem",
                  }}
                  className="absolute"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="370"
                    height="100"
                    viewBox="0 0 385 100"
                    fill="none"
                  >
                    <path
                      d="M0 1H251.061C275.914 1 296.061 21.1472 296.061 46V55.0305C296.061 79.3142 315.747 99 340.031 99V99C364.314 99 384 79.3142 384 55.0305V17"
                      stroke="#F0D683"
                    />
                  </svg>
                </div>
              </li>
            </div>

            <div
              className="rounded-full flex relative self-center"
              style={{
                width: "42rem",
                height: "42rem",
                background:
                  "radial-gradient(50% 50% at 50% 50%, #17858C 0%, rgba(4, 59, 63, 0.00) 100%)",
              }}
            >
              <div
                className="rounded-full"
                style={{
                  width: "38rem",
                  height: "38rem",
                  border: "1px solid #F0D683",
                  background:
                    "radial-gradient(50% 50% at 50% 50%, #17858C 0%, rgba(4, 59, 63, 0.00) 100%)",
                  margin: "auto",
                }}
              >
                <img className="object-contain" src={infoImg} alt="img" />
              </div>
            </div>

            <div className="text-right" style={{maxWidth: "35rem"}}>
              <li className="mb-20 relative">
                <p>
                  <strong>Транспортировка</strong>
                </p>
                <p>
                  Перевозим собственной ТК. Гарантируем, что все будет
                  доставлено без повреждений
                </p>

                <div style={{top: "1rem", right: "7rem"}} className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="370"
                    height="56"
                    viewBox="0 0 385 56"
                    fill="none"
                  >
                    <path
                      d="M385 1H46C21.1472 1 0.999983 21.1472 0.999983 46V56"
                      stroke="#F0D683"
                    />
                  </svg>
                </div>
              </li>

              <li className="mb-20 relative">
                <p>
                  <strong>Персональный менеджер-переводчик</strong>
                </p>
                <p>Более 10 лет опыта индивидуального подбора мебели</p>

                <div style={{top: "1rem", right: "7rem"}} className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="370"
                    height="110"
                    viewBox="0 0 384 110"
                    fill="none"
                  >
                    <path
                      d="M384 1H135.466C110.613 1 90.4662 21.1472 90.4662 46V64C90.4662 88.8528 70.319 109 45.4662 109H-9.65595e-06"
                      stroke="#F0D683"
                    />
                  </svg>
                </div>
              </li>

              <div className="pt-20">
                <Button title="забронировать тур" />
              </div>
            </div>
          </ol>
        </div>
      </Container>
    </section>
  )
}

export default Info
