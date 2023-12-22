import React from "react"
import Logo from "./Logo"
import Container from "../Container"
import youtube from "../../assets/you.svg"
import vk from "../../assets/vk.svg"
import telegram from "../../assets/Tg.svg"

const Navbar = () => {
  return (
    <nav className="py-6">
      <Container>
        <div className="flex justify-between flex-wrap">
          <div className="flex align-items-center gap-6 flex-wrap ">
            <Logo />
            <p className="w-[20rem] leading-6 max-[600px]:hidden">
              Индивидуальные мебельные туры в Китай для частных клиентов и
              бизнеса
            </p>
          </div>

          <div className="flex gap-[7.4rem] flex-wrap max-[1200px]:hidden">
            <div>
              <p className="text-neutral-500 tex-light">E-mail:</p>
              <a
                className="border-b border-dashed border-amber-300 w-fit pb-1"
                href="mailto:rosexpress-msk@yandex.ru"
              >
                rosexpress-msk@yandex.ru
              </a>
            </div>

            <div className="flex gap-4">
              <a href="https://www.youtube.com/">
                <img className="w-[4rem]" src={youtube} />
              </a>

              <a href="https://web.telegram.org/">
                <img className="w-[4rem]" src={telegram} />
              </a>

              <a href="https://vk.com/">
                <img className="w-[4rem]" src={vk} />
              </a>
            </div>

            <div>
              <a href="tel:8(800)3338901">
                <p className="text-3xl text-white"> 8 (800) 333-89-01</p>
                <p className="border-b border-dashed border-amber-300 w-fit pb-1">
                  Обратный звонок
                </p>
              </a>
            </div>
          </div>

          <div className="min-[1200px]:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="40px"
              height="40px"
              viewBox="0 0 32 32"
              enable-background="new 0 0 32 32"
              id="Filled_Line"
              version="1.1"
              xml:space="preserve"
            >
              <line
                fill="none"
                id="XMLID_840_"
                stroke="#E5c97B"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
                x1="16"
                x2="16"
                y1="7"
                y2="25"
              />
              <line
                fill="none"
                id="XMLID_839_"
                stroke="#E5c97B"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
                x1="7"
                x2="7"
                y1="7"
                y2="25"
              />
              <line
                fill="none"
                id="XMLID_838_"
                stroke="#E5c97B"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
                x1="25"
                x2="25"
                y1="7"
                y2="25"
              />
            </svg>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
