import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: "2023 - Present",
    title: "Code Coach",
    duration: "1 month",
    details:
      "Responsible for teaching children how to code using Scratch and Python. Developed lesson plans specific to each kids needs and catered towards their level of experience",
  },
  {
    year: "2022 - 2023",
    title: "Medical Scribe",
    duration: "9 months",
    details:
      "Enhanced patient care by providing accurate documentation within a fast-paced clinical environment of > 45 patients. Utilized medical terminology and entered data into Electronic Medical Records (EMR) accurately and efficiently. Updated patient history with compliance of HIPAA.",
  },

  {
    year: "2021 - 2022",
    title: "Advanced Clinical Associate",
    duration: "1 year & 1 month",
    details:
      "Provided patient care by performing point of care testing such as covid, influenza, strep, urinalysis and mononucleosis, taking vital signs, performing EKGs and recording medical history.Experience working with a high patient volume of > 80 patients per day  during the pandemic at various locations.Responsible for scribing for providers using EMR and carrying out clerical duties.",
  },
  {
    year: "2018 - 2021",
    title: "EMT-B",
    duration: "3 years & 1 month",
    details:
      "Delivered patient care by taking vital signs and administering emergency medicine, transported them to hospitals and rehabs, and kept family members calm during times of despair.Experience working 13-hour shifts, worked alongside paramedics and assisted them with advanced life support.",
  },
  {
    year: "2015 - 2020",
    title: "Certified Personal Trainer",
    duration: "4 years & 9 months",
    details:
      "Provided exercise knowledge and motivation for clients. Sold training sessions and packages. Received a bonus for reaching a minimum number of 75 sessions in a one month time span. Maintained a stable clientele since the first year of working at Blink.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#5e0037]">Work</h1>
      {/* using parentheses here instead of curly braces to render out elements on screen*/}
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
