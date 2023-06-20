import styles from "../style";
import { discount, robot } from "../assets";

const Hero = () => (
  <section id="home" className={"flex md:flex-row flex-col"}>
    <div
      className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div
        className="flex flex-row items-center py-[6px] px-4 
      bg-discount-gradient rounded-[10px] mb-12 mt-4"
      >
        <p className={`${styles.paragraph} ml-2`}>
          {" "}
          Introducing
          <span className="text-white"> Neebox </span>
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 text-center font-poppins font-semibold ss:text-[60px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          A<span className="text-gradient"> Convenient</span> way of{" "}
          <span className="text-gradient"> automation </span>
        </h1>
      </div>
      <p className={`${styles.paragraph} max-w-[900px] mt-5 text-center`}>
        Combine your network devices into one app that you can organize and
        explore from any device.
        <br /> Designed for normal users || network engineers.
      </p>

      <div>
        <img
          src={robot}
          alt="router"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z[0] w-[40%] h-[35%] pink__gradient" />
        <div className="absolute z[1] w-[40%] rounded-full h-[55%] white__gradient" />
        <div className="absolute z[2] w-[50%] h-[15%] blue__gradient" />
      </div>
    </div>
  </section>
);

export default Hero;
