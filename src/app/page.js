import Banner from "@/components/Banner/Banner";
import ChooseUs from "@/components/ChooseUs/ChooseUs";
import Contacts from "@/components/Contacts/Contacts";
import Doctors from "@/components/Doctors/Doctors";
import Services from "@/components/Services/Services";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <Services />
      <ChooseUs />
      <Doctors />
      <Contacts />
    </div>
  );
};

export default page;
