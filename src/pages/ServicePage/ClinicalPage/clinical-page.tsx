import React, { useState } from "react";
import "./clinical-page.css";

import ClinicalPageSerive from "./clinical-page-service";

const ClinicalPage: React.FC = () => {
  const data = [
    {
      name: "Laboratory",
      desc: "Expert veterinary lab services offer precise diagnostics, ensuring your pet's health and enabling tailored treatment for optimal well-being.",
    },

    {
      name: "Wellness exams",
      desc: "Wellness exams for pets provide comprehensive health assessments, early detection of issues, and personalized care plans for their overall well-being",
    },
    {
      name: "Exotic pets",
      desc: "Specialized care for exotic pets includes unique dietary needs, habitat requirements, and medical expertise tailored to each species' specific needs",
    },
    {
      name: "Dermatology",
      desc: "Dermatology services address skin conditions in pets, offering diagnostics, treatments, and preventive care for optimal skin health and comfort.",
    },

    {
      name: "Cardiology",
      desc: "Pet cardiology services provide advanced heart care, including diagnostics, treatments, and monitoring for cardiac conditions, ensuring their overall health.",
    },

    {
      name: "Rehabilitation",
      desc: "Rehabilitation services for pets offer tailored programs to enhance mobility, relieve pain, and improve overall quality of life through therapy.",
    },
    {
      name: "Telemedicine",
      desc: "Telemedicine for pets offers convenient access to veterinary care, consultations, and guidance, ensuring timely support for pet health concerns remotely.",
    },

    {
      name: "Emergency",
      desc: "Emergency pet services provide immediate care for injuries, illnesses, and critical situations, ensuring rapid response and life-saving interventions.",
    },

    {
      name: "Ultrasound",
      desc: "Ultrasound services for pets offer non-invasive diagnostic imaging to examine internal organs, detect abnormalities, and guide medical treatments effectively.",
    },

    {
      name: "Neurology",
      desc: "Neurology services for pets provide expertise in diagnosing and treating neurological disorders, ensuring optimal brain and nervous system health.",
    },

    {
      name: "Endoscopy",
      desc: "Endoscopy services for pets offer minimally invasive procedures to diagnose and treat gastrointestinal and respiratory conditions, ensuring thorough examinations.",
    },
  ];

  return (
    <>
      <section className="clinical-page-banner">
        <h2>Grooming</h2>
        <p>
          Our grooming services pamper your furry friend with baths, haircuts,
          nail trims, ear cleaning, and more!
        </p>
      </section>
      <section className="surgical-page-service">
      <section className="clinical-service-container">
     
          {data.map((post) => (
            <>
              <ClinicalPageSerive name={post.name} desc={post.desc} />
            </>
          ))}
      </section>
      </section>
    </>
  );
};

export default ClinicalPage;
