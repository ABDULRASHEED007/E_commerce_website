import React from 'react'

const Footer = () =>  {
  return (
    <section className="relative bg-black text-white overflow-hidden py-10">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                {/* <svg
                  width="40"
                  height="46"
                  viewBox="0 0 50 56"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                  />
                </svg> */}
                <svg width={40} height={46} fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="ecommerce"><path d="M46.33 25.66H23.86l-.51-2.83c-.12-.68-.72-1.18-1.41-1.18h-4.27a1.43 1.43 0 1 0 0 2.86h3.07l2.58 14.23c.02.1.21 1 .74 2.04 1.03 2.05 3.11 3.32 5.42 3.32h14.26a1.43 1.43 0 1 0 0-2.86H29.49c-1.21 0-2.33-.68-2.86-1.74-.1-.21-.19-.41-.26-.58h15.85c1.68 0 3.07-.71 3.9-2.01.36-.56.58-1.2.67-1.93l.96-7.73c.05-.41-.08-.82-.35-1.13-.27-.29-.66-.46-1.07-.46zm-2.38 8.98c-.04.29-.12.54-.24.73-.3.47-.77.69-1.49.69H25.75l-1.37-7.54H44.7l-.75 6.12zM28.26 44.73c-1.84 0-3.34 1.5-3.34 3.34 0 1.84 1.5 3.34 3.34 3.34 1.84 0 3.34-1.5 3.34-3.34 0-1.84-1.5-3.34-3.34-3.34zm0 3.82a.48.48 0 1 1 0-.96.48.48 0 0 1 0 .96zm12.87-3.82c-1.84 0-3.34 1.5-3.34 3.34 0 1.84 1.5 3.34 3.34 3.34 1.84 0 3.34-1.5 3.34-3.34 0-1.84-1.5-3.34-3.34-3.34zm0 3.82a.48.48 0 1 1 .48-.48c-.01.27-.22.48-.48.48z"></path><path d="M59.46.65H4.54C2.04.65 0 2.68 0 5.19v53.62c0 2.5 2.04 4.54 4.54 4.54h54.92c2.5 0 4.54-2.04 4.54-4.54V5.19C64 2.68 61.96.65 59.46.65zm1.67 58.16c0 .92-.75 1.68-1.68 1.68H4.54c-.92 0-1.68-.75-1.68-1.68V12.58h58.27v46.23zm0-49.1H2.87V5.19c0-.92.75-1.68 1.68-1.68h54.92c.92 0 1.68.75 1.68 1.68v4.52z"></path><path d="M7.71 5.18c-.8 0-1.44.64-1.44 1.43s.65 1.43 1.44 1.43a1.43 1.43 0 1 0 0-2.86zm5.31 0c-.8 0-1.44.64-1.44 1.43s.65 1.43 1.44 1.43a1.43 1.43 0 1 0 0-2.86zm5.31 0c-.8 0-1.44.64-1.44 1.43s.65 1.43 1.44 1.43a1.43 1.43 0 1 0 0-2.86zm37.98 0H45.75a1.43 1.43 0 1 0 0 2.86h10.57c.79 0 1.43-.64 1.43-1.43s-.65-1.43-1.44-1.43zM7.04 57.13h49.93c.79 0 1.43-.64 1.43-1.43V17.37c0-.79-.64-1.43-1.43-1.43H7.04c-.79 0-1.43.64-1.43 1.43V55.7c-.01.79.64 1.43 1.43 1.43zM8.47 18.8h47.06v35.46H8.47V18.8z"></path></svg>
                <span className="ml-4 text-lg font-bold">Abdul Rasheed</span>
              </div>
              <div>
                <p className="mb-4  text-base font-medium">Place were you can design clothing life.</p>
                <p className="text-sm text-gray-600">
                  &copy; Copyright 2022. All Rights Reserved by Abdul.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-white">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-400 hover:text-gray-700" href="#">
                    Features
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-400 hover:text-gray-700" href="#">
                    Pricing
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-400 hover:text-gray-700" href="#">
                    Affiliate Program
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium text-gray-400 hover:text-gray-700" href="#">
                    Partners
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-white">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-400 hover:text-gray-700" href="#">
                    Account
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-400 hover:text-gray-700" href="#">
                    Help
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-400 hover:text-gray-700" href="#">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium text-gray-400 hover:text-gray-700" href="#">
                    Customer Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-white">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-400 hover:text-gray-700" href="#">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-400 hover:text-gray-700" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium text-gray-400 hover:text-gray-700" href="#">
                    Licensing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Footer