import React, { useState } from "react";
import "./clinical-page.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ClinicalPage: React.FC = () => {
    const [selectedContent, setSelectedContent] = useState<string | null>(null);

    const handleButtonClick = (content: string) => {
        setSelectedContent(content);
    };

    return (
        <>
            <section className="clinical-page-banner">
                <h2>Grooming</h2>
                <p>
                    Our grooming services pamper your furry friend with baths,
                    haircuts, nail trims, ear cleaning, and more!
                </p>
            </section>
            <section className="surgical-page-service">
                <div className="button-container">
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ArrowDownwardIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography>Dermatology</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ArrowDownwardIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography>Wellness Exam</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ArrowDownwardIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography>Exotic pets</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>                        
 
                    <button
                        className="clinical-button"
                        onClick={() => handleButtonClick("Cardiology")}
                    >
                        Cardiology
                    </button>

                    <button
                        className="clinical-button"
                        onClick={() => handleButtonClick("Emergency")}
                    >
                        Emergency
                    </button>

                    <button
                        className="clinical-button"
                        onClick={() => handleButtonClick("Neurology")}
                    >
                        Neurology
                    </button>

                    <button
                        className="clinical-button"
                        onClick={() => handleButtonClick("Stem cell")}
                    >
                        Stem cell
                    </button>

                    <button
                        className="clinical-button"
                        onClick={() => handleButtonClick("Endocrinology")}
                    >
                        Endocrinology
                    </button>

                    <button
                        className="clinical-button"
                        onClick={() => handleButtonClick("CT & MRI")}
                    >
                        CT & MRI
                    </button>

                    <button
                        className="clinical-button"
                        onClick={() => handleButtonClick("End-of-life care")}
                    >
                        End-of-life care
                    </button>

                    <button
                        className="clinical-button"
                        onClick={() => handleButtonClick("Laboratory")}
                    >
                        Laboratory
                    </button>

                    <button
                        className="clinical-button"
                        onClick={() => handleButtonClick("Rehabilitation")}
                    >
                        Rehabilitation
                    </button>

                    <button
                        className="clinical-button"
                        onClick={() => handleButtonClick("Telemedicine")}
                    >
                        Telemedicine
                    </button>

                    <button
                        className="clinical-button"
                        onClick={() => handleButtonClick("Ultrasound")}
                    >
                        Ultrasound
                    </button>

                    <button
                        className="clinical-button"
                        onClick={() => handleButtonClick("Endoscopy")}
                    >
                        Endoscopy
                    </button>

                    <button
                        className="clinical-button"
                        onClick={() => handleButtonClick("Internal medicine")}
                    >
                        Internal medicine
                    </button>

                    {/* <button
                        className="clinical-button"
                        onClick={() => handleButtonClick("Chemotherapy")}
                    >
                        Chemotherapy
                    </button> */}

                    <div className="selected-content">
                        {selectedContent && (
                            <div>
                                {selectedContent} content will be displayed
                                here.
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ClinicalPage;
