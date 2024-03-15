/* eslint-disable jsx-a11y/anchor-is-valid */
import { Helmet } from "react-helmet";
import { Text, Button, Input, Heading, Img } from "../components";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Landing Page</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full pb-9 sm:pb-5 bg-black-900">
        <div>
          <div className="flex flex-col w-full gap-[37px] mx-auto md:p-5 max-w-[1248px]">
            <div className="flex md:flex-col justify-between items-start ml-[3px] gap-5">
              <div className="flex flex-col w-[44%] md:w-full mt-[76px] gap-[97px]">
                <div className="flex sm:flex-col justify-between items-center w-[82%] md:w-full gap-5">
                  <Img
                    src="images/img_nav.svg"
                    alt="nav_one"
                    className="h-[41px] sm:w-full"
                  />
                  <div className="flex justify-between w-[63%] sm:w-full gap-5 py-px">
                    <a href="#" className="self-start">
                      <Text size="xs" as="p" className="uppercase text-right">
                        charger brands
                      </Text>
                    </a>
                    <a href="#" className="self-start">
                      <Text size="xs" as="p" className="uppercase text-right">
                        SECTORS
                      </Text>
                    </a>
                    <a href="#" className="self-start">
                      <Text size="xs" as="p" className="uppercase text-right">
                        STEPS
                      </Text>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col ml-1.5 gap-[45px]">
                  <Text size="xl" as="p">
                    Manage and grow your EV Charging Network
                  </Text>
                  <Text size="lg" as="p" className="w-[73%] md:w-full">
                    Our software solution helps you manage your charger fleet at
                    ease{" "}
                  </Text>
                </div>
              </div>
              <Img
                src="images/img_image_1.png"
                alt="imageone_one"
                className="w-[51%] md:w-full object-cover"
              />
            </div>
            <div className="flex items-center w-[22%] md:w-full gap-2">
              <Heading as="h1" className="tracking-[0.80px] uppercase">
                CHARGER BRANDS
              </Heading>
              <div className="h-[2px] w-[30%] bg-white-A700" />
            </div>
            <div className="flex md:flex-col justify-center items-center gap-[50px] p-[31px] sm:p-5 bg-blue-900">
              <Img
                src="images/img_image_4.png"
                alt="imagefour_one"
                className="w-[20%] md:w-full object-cover"
              />
              <Img
                src="images/img_image_2.png"
                alt="imagetwo_one"
                className="w-[20%] md:w-full object-cover"
              />
              <Img
                src="images/img_image_3.png"
                alt="imagethree_one"
                className="w-[25%] md:w-full object-cover"
              />
              <Img
                src="images/img_header_nav_top.svg"
                alt="headernavtop"
                className="h-[22px] md:w-full"
              />
            </div>
          </div>
          <div className="mt-8 p-[49px] md:p-5 bg-white-A700">
            <div className="flex flex-col w-full gap-[45px] mx-auto md:p-5 max-w-[1238px]">
              <div className="flex items-center w-[26%] md:w-full gap-2">
                <Heading
                  as="h2"
                  className="!text-blue-700 tracking-[0.80px] uppercase text-center"
                >
                  Choose your sector
                </Heading>
                <div className="h-[2px] w-[26%] bg-blue-700" />
              </div>
              <div className="flex md:flex-col gap-9">
                <div className="flex flex-col w-full gap-2.5 p-[27px] sm:p-5 border-gray-300 border border-solid">
                  <Img
                    src="images/img_image_5.png"
                    alt="ev_drivers_one"
                    className="mt-[7px] ml-4 object-cover"
                  />
                  <a href="#" className="ml-4">
                    <Heading as="h3" className="!text-gray-900 !font-extrabold">
                      EV DRIVERS
                    </Heading>
                  </a>
                  <div className="flex flex-col items-start w-[86%] md:w-full ml-4 gap-[38px]">
                    <a href="#">
                      <Text as="p" className="!text-gray-900">
                        Charge on the road, and control your home charge point
                      </Text>
                    </a>
                    <Button
                      shape="square"
                      className="sm:px-5 tracking-[2.00px] uppercase font-extrabold min-w-[214px]"
                    >
                      Press for more
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col w-full gap-[9px] p-7 sm:p-5 border-gray-300 border border-solid">
                  <div className="mt-1.5 ml-[15px]">
                    <Img
                      src="images/img_lattice80_accel.png"
                      alt="lattice80accel"
                      className="h-[184px] w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start w-[84%] md:w-full ml-[15px] gap-4">
                    <div className="flex flex-col self-stretch gap-2.5">
                      <a href="#">
                        <Heading
                          as="h4"
                          className="!text-gray-900 !font-extrabold"
                        >
                          BUISNESSES
                        </Heading>
                      </a>
                      <a href="#">
                        <Text as="p" className="!text-gray-900">
                          Get your charge points installed, manage them and your
                          fleet charging all in one platform
                        </Text>
                      </a>
                    </div>
                    <Button
                      shape="square"
                      className="sm:px-5 tracking-[2.00px] uppercase font-extrabold min-w-[214px]"
                    >
                      Press for more
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col justify-center w-full gap-2.5 p-[31px] sm:p-5 border-gray-300 border border-solid">
                  <div className="mt-[3px] ml-3">
                    <Img
                      src="images/img_lattice80_accel_184x306.png"
                      alt="lattice80accel"
                      className="h-[184px] w-full object-cover"
                    />
                  </div>
                  <a href="#" className="ml-3">
                    <Heading
                      as="h5"
                      className="!text-gray-900 uppercase !font-extrabold"
                    >
                      Whitelabel Partners
                    </Heading>
                  </a>
                  <div className="flex flex-col items-start w-[85%] md:w-full ml-3 gap-[34px]">
                    <a href="#">
                      <Text as="p" className="!text-gray-900">
                        Partner up with us and our software to install, operate
                        and sell more charge points
                      </Text>
                    </a>
                    <Button
                      shape="square"
                      className="sm:px-5 tracking-[2.00px] uppercase font-extrabold min-w-[214px]"
                    >
                      Press for more
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mt-[81px] gap-[185px] mx-auto md:p-5 max-w-[1249px]">
            <div className="flex flex-col gap-[45px]">
              <div className="flex sm:flex-col items-center w-[40%] md:w-full gap-2">
                <Heading as="h2" className="tracking-[0.80px] uppercase">
                  We&#39;ve got you covered at every step
                </Heading>
                <div className="h-[2px] w-[16%] bg-white-A700" />
              </div>
              <div className="flex md:flex-col justify-between items-start gap-5">
                <div className="flex flex-col w-[22%] md:w-full gap-5">
                  <a href="#">
                    <Heading as="h3" className="uppercase">
                      Innovative
                    </Heading>
                  </a>
                  <div className="h-px w-[73%] bg-blue-700" />
                  <a href="#">
                    <Text as="p">
                      CHRG Network is a state-of-the-art solution for everyone
                      who wants to cut electricity bills and go green while
                      having a hassle-free experience.
                    </Text>
                  </a>
                </div>
                <div className="flex flex-col w-[22%] md:w-full gap-5">
                  <a href="#">
                    <Heading as="h4" className="uppercase">
                      Future-proof
                    </Heading>
                  </a>
                  <div className="h-px w-[73%] bg-blue-700" />
                  <a href="#">
                    <Text as="p">
                      Equipped with the latest industry innovations CHRG Network
                      is also compatible with solar and other alternative energy
                      sources, making it a great future investment before clean
                      energy is the new normal.
                    </Text>
                  </a>
                </div>
                <div className="flex flex-col w-[22%] md:w-full gap-5">
                  <a href="#">
                    <Heading as="h5" className="uppercase">
                      Economical
                    </Heading>
                  </a>
                  <div className="h-px w-[73%] bg-blue-700" />
                  <a href="#">
                    <Text as="p">
                      Not only is it cheaper than charging at an expensive
                      public charge point, but CHRG Network will also flexibly
                      adapt to a shifting tariff providing a cost-effective
                      solution when the electricity is cheapest.
                    </Text>
                  </a>
                </div>
                <div className="flex flex-col w-[22%] md:w-full gap-5">
                  <a href="#">
                    <Heading as="h6" className="uppercase">
                      Dedicated
                    </Heading>
                  </a>
                  <div className="h-px w-[73%] bg-blue-700" />
                  <a href="#">
                    <Text as="p">
                      The CHRG Network team is focused on the success of your
                      business. We not only follow all innovative solutions but
                      also listen to customer needs and look for common
                      solutions that would facilitate your daily tasks.
                    </Text>
                  </a>
                </div>
              </div>
            </div>
            <div className="h-[358px] relative">
              <div className="flex flex-col items-start justify-end w-[30%] gap-5 left-0 top-0 p-[15px] m-auto absolute">
                <Text size="md" as="p" className="mt-[51px]">
                  JSC &quot;Charge Network&quot;
                </Text>
                <Text size="md" as="p">
                  Company ID: 304854944
                </Text>
                <Text size="md" as="p" className="mb-1">
                  Address: Žalgirio str. 90, LT-08104 Vilnius
                </Text>
              </div>
              <div className="flex flex-col w-[30%] pt-[66px] gap-[17px] right-0 top-0 m-auto md:pt-5 absolute">
                <Text size="md" as="p" className="ml-[15px]">
                  Join our news and updates
                </Text>
                <div className="p-2">
                  <Input
                    shape="square"
                    type="email"
                    name="date"
                    placeholder="Enter your email address"
                    className="sm:pr-5"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center w-[89%] gap-[77px] bottom-0 right-0 left-0 m-auto absolute">
                <Text size="md" as="p" className="w-[29%] md:w-full !leading-6">
                  <>
                    CHRG Network connects all charging stations
                    <br />
                    into a single network, enabling owners to
                    <br />
                    monetize their charging stations
                  </>
                </Text>
                <Button
                  color="gray_200"
                  size="xs"
                  shape="round"
                  className="self-end border-gray-600 border border-solid min-w-[68px]"
                >
                  Sign up
                </Button>
                <Text
                  size="xs"
                  as="p"
                  className="pt-[15px] pb-0.5 px-[35px] sm:px-5 !text-blue_gray-700 text-center !text-[12.8px] border-blue_gray-900 border-t border-solid"
                >
                  Copyright 2023 © CHRG Network
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
