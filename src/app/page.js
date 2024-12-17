import ChooseUs from "@/components/ChooseUs/ChooseUs";
import Contacts from "@/components/Contacts/Contacts";
import Doctors from "@/components/Doctors/Doctors";
import Hero from "@/components/Hero/Hero";
import Search from "@/components/Search/Search";
import Services from "@/components/Services/Services";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Search />
      <Services />
      <ChooseUs />
      <Doctors />
      <Contacts />
    </div>
  );
};

export default page;
