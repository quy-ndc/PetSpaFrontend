import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PriceTable from "./price-table";
import { Tabs } from "@mui/material";
import "./pricing-page.css";
import { Link } from "react-router-dom";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

interface PriceTablePropItem {
  name: string;
  type: string;
  price: number;
}

function PricingPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const priceData: Array<PriceTablePropItem> = [
    {
      name: "Service 1",
      type: "meow",
      price: 20,
    },

    {
      name: "Service 2",
      type: "meow",
      price: 30,
    },

    {
      name: "Service 3",
      type: "meow",
      price: 20,
    },

    {
      name: "Service 4",
      type: "meow",
      price: 40,
    },
    {
      name: "Service 1",
      type: "meow",
      price: 20,
    },

    {
      name: "Service 2",
      type: "meow",
      price: 30,
    },

    {
      name: "Service 3",
      type: "meow",
      price: 20,
    },

    {
      name: "Service 4",
      type: "meow",
      price: 40,
    },
  ];

  const priceData2: Array<PriceTablePropItem> = [
    {
      name: "Service 2",
      type: "meow",
      price: 20,
    },

    {
      name: "Service 1",
      type: "meow",
      price: 30,
    },

    {
      name: "Service 3",
      type: "meow",
      price: 20,
    },

    {
      name: "Service 4",
      type: "meow",
      price: 40,
    },
  ];

  const priceData3: Array<PriceTablePropItem> = [
    {
      name: "Service 3",
      type: "meow",
      price: 20,
    },

    {
      name: "Service 2",
      type: "meow",
      price: 30,
    },

    {
      name: "Service 3",
      type: "meow",
      price: 20,
    },

    {
      name: "Service 4",
      type: "meow",
      price: 40,
    },
  ];
  const priceData4: Array<PriceTablePropItem> = [
    {
      name: "Service 4",
      type: "meow",
      price: 20,
    },

    {
      name: "Service 2",
      type: "meow",
      price: 30,
    },

    {
      name: "Service 3",
      type: "meow",
      price: 20,
    },

    {
      name: "Service 4",
      type: "meow",
      price: 40,
    },
  ];

  const priceData5: Array<PriceTablePropItem> = [
    {
      name: "Service 5",
      type: "meow",
      price: 20,
    },

    {
      name: "Service 2",
      type: "meow",
      price: 30,
    },

    {
      name: "Service 3",
      type: "meow",
      price: 20,
    },

    {
      name: "Service 4",
      type: "meow",
      price: 40,
    },
  ];

  return (
    <>
      <div className="pricing-page-service-detail">
        <div className="img-left">
          <img src="https://anticruelty.org/sites/default/files/images/ACS-Images/Clinic/postadoptservices_hero2.jpg" />
        </div>
        <div className="content-right">

          <h1>PRICING</h1>
          <p>
            We believe in being upfront with our pet parents. Being upfront means
            we’ll always take the time to talk through your pet’s condition, all
            the options for their treatment and the likely results of each option.
            And being upfront also includes talking about the cost of each option.
          </p>
        </div>
      </div>

      <section className="pricing-page-service">
        <div className="pricing-page-service-container">
          <Box
            sx={{
              bgcolor: "background.paper",
              display: "flex",
              height: "100%",
              width: "100%",
            }}
          >
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{
                borderRight: 1,
                borderColor: "divider",
              }}
            >
              <Tab label="Clinical" {...a11yProps(0)} />
              <Tab label="Grooming" {...a11yProps(1)} />
              <Tab label="Laboratory" {...a11yProps(2)} />
              <Tab label="Surgical" {...a11yProps(3)} />
              <Tab label="Holistic" {...a11yProps(4)} />
            </Tabs>
            <Box
              sx={{
                margin: "0 auto",
              }}
            >
              <TabPanel value={value} index={0}>
                <PriceTable priceData={priceData} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <PriceTable priceData={priceData2} />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <PriceTable priceData={priceData3} />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <PriceTable priceData={priceData4} />
              </TabPanel>

              <TabPanel value={value} index={4}>
                <PriceTable priceData={priceData5} />
              </TabPanel>
            </Box>
          </Box>
          <div className="pricing-page-service-detail-right">
            <Link to="/booking">Book now</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default PricingPage;
