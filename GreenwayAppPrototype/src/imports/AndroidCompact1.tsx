import svgPaths from "./svg-8k4om4g1nh";
import imgImage1 from "figma:asset/e91ea341f910781a4e49a0e6db852d5fce59c4bd.png";

function Group() {
  return (
    <div className="absolute contents left-[19px] top-[16px]">
      <div className="absolute bg-[#dae5d9] h-[36px] left-[19px] rounded-[8px] top-[16px] w-[307px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] left-[40px] not-italic text-[16px] text-black top-[23px] w-[243px]">From: Bristol Temple Meads</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[19px] top-[57px]">
      <div className="absolute bg-[#dae5d9] h-[36px] left-[19px] rounded-[8px] top-[57px] w-[307px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] left-[39.98px] not-italic text-[16px] text-black top-[64px] w-[242.95px]">To: Bristol Shopping Quarter</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute h-[21px] left-[354px] top-[44px] w-[12px]">
      <div className="absolute inset-[-3.57%_-46.02%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 23">
          <g id="Group 8">
            <path d={svgPaths.p11af4a00} fill="var(--stroke-0, black)" id="Arrow 1" />
            <path d={svgPaths.p330b5000} fill="var(--stroke-0, black)" id="Arrow 2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[342px] top-[36px]">
      <div className="absolute bg-[#dae5d9] left-[342px] rounded-[8px] size-[36px] top-[36px]" />
      <Group2 />
    </div>
  );
}

export default function AndroidCompact() {
  return (
    <div className="bg-white relative size-full" data-name="Android Compact - 1">
      <div className="absolute h-[917px] left-[-120px] top-0 w-[895px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <div className="absolute bg-[#97c692] h-[112px] left-[7px] rounded-[8px] top-[7px] w-[397px]" />
      <Group />
      <Group1 />
      <Group3 />
      <div className="absolute h-[314.5px] left-[24.35px] top-[308px] w-[261.149px]">
        <div className="absolute inset-[-1.59%_-1.91%_-1.59%_-1.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 272 325">
            <path d={svgPaths.p3c75e600} id="Vector 3" stroke="var(--stroke-0, #00BB28)" strokeLinecap="round" strokeWidth="10" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[191px] top-[621px] w-[30px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 5">
            <line id="Line 2" stroke="var(--stroke-0, #DAE5D9)" strokeLinecap="round" strokeWidth="5" x1="2.5" x2="27.5" y1="2.5" y2="2.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[230px] not-italic text-[#1e1e1e] text-[16px] text-nowrap top-[891.18px] tracking-[-0.176px] whitespace-pre">Summary</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[355px] not-italic text-[#1e1e1e] text-[16px] text-center text-nowrap top-[892.18px] tracking-[-0.176px] translate-x-[-50%] whitespace-pre">Profile</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[27px] not-italic text-[#1e1e1e] text-[16px] text-nowrap top-[893.18px] tracking-[-0.176px] whitespace-pre">Rewards</p>
      <div className="absolute h-[396.5px] left-[76px] top-[175px] w-[336.034px]">
        <div className="absolute inset-[-1.26%_-1.49%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 347 407">
            <path d={svgPaths.p32b8fb00} id="Vector 8" stroke="var(--stroke-0, #BCBCBC)" strokeDasharray="1 15" strokeLinecap="round" strokeWidth="10" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[132px] left-[73.5px] top-[174.5px] w-[84px]">
        <div className="absolute inset-[-3.79%_-5.95%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 142">
            <path d={svgPaths.p19a2b640} id="Vector 2" stroke="var(--stroke-0, #00BB28)" strokeDasharray="1 15" strokeLinecap="round" strokeWidth="10" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-[#d9d9d9] h-[112px] left-[101px] rounded-[8px] top-[805px] w-[116px]" />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[142px] not-italic text-[#1e1e1e] text-[16px] text-nowrap top-[891px] tracking-[-0.176px] whitespace-pre">Map</p>
    </div>
  );
}