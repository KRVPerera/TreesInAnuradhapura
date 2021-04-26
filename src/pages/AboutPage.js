import React from 'react';
import {About} from "../content/About";
import {Page} from "./Page";

export const AboutPage = () => {
    console.log("About loaded")
    return (
        <Page title="මූලාශ්‍රය">
            <About />
        </Page>
    )
}
