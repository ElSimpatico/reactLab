import React, { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "@material-ui/core";

import { routesPage } from "../../enums/routes-page";

const NavigationPages: React.FC = () => {
    const [tabSelected, setTabSelected] = useState(0);

    function changeTab(event: ChangeEvent<any>, newTabSelected: number) {
        setTabSelected(newTabSelected);
    }
    return (
        <div style={{ position: "absolute", bottom: "3px", width: "100%" }}>
            <Tabs variant="fullWidth" value={tabSelected} onChange={changeTab}>
                <Tab label="Item One" component={Link} to="/" />
                <Tab
                    label="Item One"
                    component={Link}
                    to={`/${routesPage.carline}`}
                />
                <Tab
                    label="Item One"
                    component={Link}
                    to={`/${routesPage.engine}`}
                />
            </Tabs>
        </div>
    );
};

export default NavigationPages;
