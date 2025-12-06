import imgImage1 from "figma:asset/b8a2b677834e526d26ab9ca907bf94c210462802.png";
import imgCharityShop2 from "figma:asset/bc285124116f723b905ffee92f651583dfe0e3b8.png";

function Group() {
  return (
    <div className="absolute contents left-[12px] top-[10px]">
      <div className="absolute bg-[#dae5d9] h-[36px] left-[12px] rounded-[8px] top-[10px] w-[387px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] left-[27.13px] not-italic text-[16px] text-black top-[17px] w-[195.391px]">🔎 Search for places</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[318px] top-[57px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] left-[318px] not-italic text-[16px] text-black text-nowrap top-[57px] whitespace-pre">Charity sh</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[172px] top-[50px]">
      <div className="absolute bg-[#dae5d9] h-[36px] left-[172px] rounded-[8px] top-[50px] w-[111px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] left-[194px] not-italic text-[16px] text-black text-nowrap top-[57px] whitespace-pre">Restaurant</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] left-[172px] not-italic text-[20px] text-black text-nowrap top-[54px] whitespace-pre">🍴</p>
    </div>
  );
}

export default function AndroidCompact() {
  return (
    <div className="bg-white relative size-full" data-name="Android Compact - 4">
      <div className="absolute h-[966px] left-[-221px] pointer-events-none rounded-[4px] top-[-49px] w-[671px]" data-name="image 1">
        <div aria-hidden="true" className="absolute inset-0 rounded-[4px]">
          <div className="absolute bg-white inset-0 rounded-[4px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[4px]">
            <img alt="" className="absolute h-full left-[-5.21%] max-w-none top-0 w-[105.21%]" src={imgImage1} />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-8 border-solid border-white inset-[-8px] rounded-[12px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.2),0px_0px_2px_0px_rgba(0,0,0,0.08),0px_2px_6px_0px_rgba(0,0,0,0.1)]" />
      </div>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[230px] not-italic text-[#1e1e1e] text-[16px] text-nowrap top-[887.18px] tracking-[-0.176px] whitespace-pre">Summary</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[355px] not-italic text-[#1e1e1e] text-[16px] text-center text-nowrap top-[888.18px] tracking-[-0.176px] translate-x-[-50%] whitespace-pre">Profile</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[27px] not-italic text-[#1e1e1e] text-[16px] text-nowrap top-[889.18px] tracking-[-0.176px] whitespace-pre">Rewards</p>
      <div className="absolute bg-[#d9d9d9] h-[112px] left-[101px] rounded-[8px] top-[801px] w-[116px]" />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[142px] not-italic text-[#1e1e1e] text-[16px] text-nowrap top-[887px] tracking-[-0.176px] whitespace-pre">Map</p>
      <div className="absolute bg-[#97c692] h-[112px] left-[7px] rounded-[8px] top-[4px] w-[397px]" />
      <Group />
      <div className="absolute bg-[#dae5d9] h-[36px] left-[12px] rounded-[8px] top-[50px] w-[76px]" />
      <div className="absolute bg-[#dae5d9] h-[36px] left-[94px] rounded-[8px] top-[50px] w-[72px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] left-[17px] not-italic text-[0px] text-black text-nowrap top-[57px] whitespace-pre">
        <span className="text-[20px]">💼</span>
        <span className="text-[16px]">{` Work`}</span>
      </p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] left-[99px] not-italic text-[0px] text-black text-nowrap top-[57px] whitespace-pre">
        <span className="text-[20px]">☕</span>
        <span className="text-[16px]">{` Cafe`}</span>
      </p>
      <div className="absolute bg-[#dae5d9] h-[36px] left-[289px] rounded-bl-[8px] rounded-tl-[8px] top-[50px] w-[110px]" />
      <Group1 />
      <Group2 />
      <div className="absolute left-[288px] size-[33px] top-[51px]" data-name="Charity shop 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCharityShop2} />
      </div>
    </div>
  );
}