import React from 'react';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import StarsIcon from '@mui/icons-material/Stars';
function Footer() {
  return (
    <div className="bg-gray-700">
      <div className="flex gap-2  text-white  justify-evenly">
        <div>
          <p className="font-bold">ABOUT US</p>
          <div className="text-sm leading-5  ">
            <p className="hover:text-blue-400 hover:underline">Contact Us</p>
            <p className="hover:text-blue-400 hover:underline">Addres</p>
            <p className="hover:text-blue-400 hover:underline">Mobile No.</p>
            <p className="hover:text-blue-400 hover:underline">Lucknow</p>
            <p className="hover:text-blue-400 hover:underline">FAQ</p>
            <p className="hover:text-blue-400 hover:underline">Landmark</p>
          </div>
        </div>
        <div>
          <p className="font-bold">GROUP COMPANIES</p>
          <div className="text-sm leading-5  ">
            <p className="hover:text-blue-400 hover:underline">Myntra</p>
            <p className="hover:text-blue-400 hover:underline">Cleartrip</p>
            <p className="hover:text-blue-400 hover:underline">Shopsy</p>
          </div>
        </div>
        <div>
          <p className="font-bold">HELP</p>
          <div className="text-sm leading-5  ">
            <p className="hover:text-blue-400 hover:underline">Payments</p>
            <p className="hover:text-blue-400 hover:underline">Shipping</p>
            <p className="hover:text-blue-400 hover:underline">
              Cancellation & Returns
            </p>
            <p className="hover:text-blue-400 hover:underline">FAQ</p>
            <p className="hover:text-blue-400 hover:underline">
              Report Infringement
            </p>
          </div>
        </div>
        <div>
          <p className="font-bold">CONSUMER POLICY</p>
          <div className="text-sm leading-5  ">
            <p className="hover:text-blue-400 hover:underline">
              Cancellation & Returns
            </p>
            <p className="hover:text-blue-400 hover:underline">Terms of Use</p>
            <p className="hover:text-blue-400 hover:underline">Security</p>
            <p className="hover:text-blue-400 hover:underline">Privacy</p>
            <p className="hover:text-blue-400 hover:underline">Sitemap</p>
            <p className="hover:text-blue-400 hover:underline">
              EPR Compilance
            </p>
          </div>
        </div>
      </div>
      <div className="h-[2px] my-4 w-full bg-white"></div>
      <div className="flex justify-evenly text-white">
        <div>
          {' '}
          <CardGiftcardIcon /> Become a seller
        </div>
        <div>
          {' '}
          <StarsIcon />
          Advertise
        </div>
        <div>
          {' '}
          <CardGiftcardIcon />
          Gift
        </div>
        <div>
          <CardGiftcardIcon />
          Banner
        </div>
        <div>
          <CardGiftcardIcon />
          Poster
        </div>
        <div>
          <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
