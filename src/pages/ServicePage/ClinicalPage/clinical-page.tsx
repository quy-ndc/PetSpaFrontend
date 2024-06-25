import React, { useState } from "react";
import "./clinical-page.css";

import ClinicalPageService from "./clinical-page-service";
import { Link } from "react-router-dom";

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

    
  ];

  return (
    <>
      <section className="clinical-page-banner">
        <h2>Clinical Services</h2>
        <p>
          Your pet deserves nothing less than the best in veterinary care.
          And
          that’s what you’ll find when you trust your pet’s health to us.
        </p>
      </section>
      <section className="surgical-page-service">

      <section className="content">
            <h2>For All Your Pet’s Needs</h2>
            <div className="content-text">
                <p>Your beautiful pet can’t speak for themselves. They can’t say they’re ill or describe what’s wrong. That makes you their first line of defence. They rely on you, their pet parent, to notice the problems then bring them to an expert veterinarian. Using your deep knowledge of your pet and our veterinary skills, we can work together to diagnose your pet and decide on the best treatment.</p>
                <p>This inability to speak for themselves is why it’s so important that we have the tools to accurately diagnose health issues that are invisible on the surface. Then we can utilise all our training to interpret the findings so we can prescribe effective treatments.</p>
                <p>Without the best training and the best tools, we couldn’t offer your pet the best care. That’s why we’ve invested in the best veterinarians and equipment, and creating some of the best animal medical facilities in the region.</p>
                <p>Our veterinarians are highly qualified with years of experience diagnosing and treating pets with complex health issues. And we believe that the best medical care for your pet comes from us working together in a way that’s inclusive, co-operative and as free of stress for you and your pet as possible.</p>
            </div>
            {/* <div className="content-video">
                <img src="path/to/your/video_thumbnail.jpg" alt="Veterinary Clinic">
            </div> */}
        </section>
        </section>
        <footer className="footer">
        <p>Our pets are more than just animals; they are members of our family. </p>
        <p>That’s why we provide veterinary care that not only heals their bodies but also comforts their souls.</p>
    </footer>
      <section className="clinical-page-service">
        <section className="clinical-service-container">
          {data.map((post) => (
            <>
              <ClinicalPageService name={post.name} desc={post.desc} />
            </>
          ))}
        </section>
        <div className="clinical-page-service-detail-right">
          <Link to="/booking">Book now</Link>
        </div>
      </section>
    </>
  );
};

export default ClinicalPage;
