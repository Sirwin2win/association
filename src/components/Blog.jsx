import React from "react";
import build from "../assets/images/build.jpeg";
import group from "../assets/images/group.jpeg";
import hands from "../assets/images/hands.jpeg";
import hand from "../assets/images/hand.jpeg";
import link from "../assets/images/link.jpeg";

const Blog = () => {
  return (
    <div>
      {/* Card Image and Details Start */}
      <div className="p-[50px] ml-[-40px] md:ml-0 px-[50px]">
        <div>
          <div class="md:flex my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full">
            <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img src={build} height={400} width={500} alt="card-image" />
            </div>
            <div class="p-4 ml-[20px] px-[100px]">
              <h6 class="mb-2 text-[#000835] text-xl font-semibold">
                Importance of Building
              </h6>
              <p class="text-[#000835] leading-normal font-light">
                And that's almost always the case. “Behind every genius is a
                team,” says Murphy.“When people play off each other's skills and
                knowledge, they can create solutions that are practical and
                useful.” Science reinforces the idea that many brains are better
                than one.
              </p>
            </div>
            <div class="px-4 pb-4 pt-0 mt-2"></div>
          </div>
        </div>
        {/* Card Image and details 2 */}
        <div>
          <div class="md:flex my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full">
            <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img src={hands} height={400} width={500} alt="card-image" />
            </div>
            <div class="p-4 px-[100px]">
              <h6 class="mb-2 text-[#000835] text-xl font-semibold">
                Team Work
              </h6>
              <p class="text-[#000835] leading-normal font-light ">
                Individuals have their own set of skills and strengths. When the
                whole team works as a unit, everyone has an opportunity to learn
                from each other
              </p>
            </div>
            <div class="px-4 pb-4 pt-0 mt-2"></div>
          </div>
        </div>

        {/* Card Image and Details 3 */}
        <div>
          <div class="md:flex my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full">
            <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img src={build} height={400} width={500} alt="card-image" />
            </div>
            <div class="p-4 px-[100px]">
              <h6 class="mb-2 text-[#000835] text-xl font-semibold">
                What is the role of human resources?
              </h6>
              <p class="text-[#000835] leading-normal font-light">
                The HR helps in achieving organizational goals by performing
                various activities like recruitment, training & development,
                employee relations, performance appraisal, etc.
              </p>
            </div>
            <div class="px-4 pb-4 pt-0 mt-2"></div>
          </div>
        </div>

        {/* Card Image and Details 4 */}
        <div>
          <div class="md:flex my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full">
            <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img src={hand} height={400} width={500} alt="card-image" />
            </div>
            <div class="p-4 px-[100px]">
              <h6 class="mb-2 text-[#000835] text-xl font-semibold">Synergy</h6>
              <p class="text-[#000835] leading-normal font-light">
                Synergy is important because it allows companies to achieve
                greater business efficiency and effectiveness as an organization
              </p>
            </div>
            <div class="px-4 pb-4 pt-0 mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
