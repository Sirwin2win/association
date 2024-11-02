import React from "react";
import { Link } from "react-router-dom";
import group from "../assets/images/group.jpeg";
import hand from "../assets/images/hand.jpeg";
import cloth from "../assets/images/cloth.jpeg";
import link from "../assets/images/link.jpeg";
import rad from "../assets/images/rad.jpeg";
import "./Comp.css";

const About = () => {
  return (
    <div>
      <div className="md:flex justify-between">
        <div className="px-5 md:px-0 md:w-1/2 md:mt-[20px] mb-[50px]">
          <img src={rad} />
        </div>
        <div className="px-5 md:px-[50px] md:w-1/2 md:p-[100px] md:mt-[50px]">
          <b className="text-[#000835] intr">
            Welcome to our Association: where we do things together
          </b>
          <p className="mt-[30px] text-[#000835]">
            And that's almost always the case. “Behind every genius is a team,”
            says Murphy. “When people play off each other's skills and
            knowledge, they can create solutions that are practical and useful.”
            Science reinforces the idea that many brains are better than one
          </p>
          <button class="bg-blue-500 ml-[80px] md:ml-[150px] mt-[30px] mb-[50px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            <Link to={"/employee-form"}>Register Now </Link>
          </button>
        </div>
      </div>

      {/* Card Image and Details Start */}
      <div className="p-[50px] ml-[-40px] md:ml-0 md:flex justify-between px-[50px]">
        <div>
          <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
            <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img src={group} alt="card-image" />
            </div>
            <div class="p-4">
              <h6 class="mb-2 text-[#000835] text-xl font-semibold">
                Integration
              </h6>
              <p class="text-[#000835] leading-normal font-light">
                We are bound together by trade, business, Language, Culture,
                etc. Coming together, makes us to achieve better results. The
                strength of a chain, they said, is in the weekest link. We
                complement and complete one another. There's no such thing as
                individualistic or solo game.
              </p>
            </div>
            <div class="px-4 pb-4 pt-0 mt-2"></div>
          </div>
        </div>
        {/* Card Image and details 2 */}
        <div>
          <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
            <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img src={cloth} alt="card-image" />
            </div>
            <div class="p-4">
              <h6 class="mb-2 text-[#000835] text-xl font-semibold">
                Our Attire
              </h6>
              <p class="text-[#000835] leading-normal font-light">
                Culture they said is the total way of life. Wherever Isiagu is
                displayed, Igbos are involned. Symbolically, it stands for
                strength and boldness. Just like the Lion retreats from none,
                Igbos are brave and bold.
              </p>
            </div>
            <div class="px-4 pb-4 pt-0 mt-2"></div>
          </div>
        </div>
        {/* Card Image and Details 3 */}
        <div>
          <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
            <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img src={link} alt="card-image" />
            </div>
            <div class="p-4">
              <h6 class="mb-2 text-[#000835] text-xl font-semibold">
                Let's Get Connected
              </h6>
              <p class="text-[#000835] leading-normal font-light">
                The more we are together, the happier we shall be. Let's connect
                and do things differently in oneness, with one voice, one mind
                and selflessly.
              </p>
            </div>
            <div class="px-4 pb-4 pt-0 mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
