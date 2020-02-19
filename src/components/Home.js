import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    pre: {
        'white-space': 'pre-wrap',
    },
});

export default function Home() {
    const classes = useStyles();
    return (
        <div>
            <h2>Home</h2>
            <pre className={classes.pre}>
                This is an Open Banking API client application built with React to access the Open Banking Microservices. You need to click the upper-right login button to log in with either stevehu/123456 or ericbroda/123456 in order to access the API.  
            </pre>
            <pre className={classes.pre}>
            	The API will retrieve the result based on the userId in the OAuth 2.0 JWT access token retrieved from the light-oauth2 after the login on https://obsignin.lightapi.net site.
            </pre>
            <pre className={classes.pre}>
            	There are 11 microservices in the backend behind the light-router proxy. Most services have two endpoints: one to get a list of entities for the userId and another one get an entity for a particular accountId captured from a UI form. The dropdown values in the form are based on the logged-in user. 
            </pre>
			<pre className={classes.pre}>
				The source code for the entire demo application are open-sourced and can be accessed at GitHub <a href="https://github.com/open-banking" rel="noreferrer noopener" target="_blank">open-banking</a> organization.
			</pre>
			<pre className={classes.pre}>
				There is a <a href="https://doc.networknt.com/tutorial/open-banking/" rel="noreferrer noopener" target="_blank">tutorial</a> with over a dozen of videos on the networknt document site to show users how this application is built step by step. 
			</pre>
			<pre className={classes.pre}>
			    We build this demo application upon requests from several banks who are interested in Open Banking implementation on the light platform. By using our UK OpenBanking specification or our demo application as a base, banks can save a lot of time to deliver the products to the market.
			</pre>
			<pre className={classes.pre}>
				If you have any questions, you can ask at our <a href="https://gitter.im/networknt/light-4j" rel="noreferrer noopener" target="_blank">forum</a> or send us an email at stevehu@gmail.com
			</pre>
        </div>
    )
}
