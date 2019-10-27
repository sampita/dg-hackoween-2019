export default{
    buildAndAppendAppForm: () => {
        const appForm = 
        // `
        // <article id ="appForm">
        //     <h3>Application</h3>
            //     <section>
            //         <h4>Request ID:</h4> 
                            // <div id="appObjectId">${appObject.id}</div>
            //         <h4>Complete Organization Address:</h4> 
                            // <div id="appObjectAddress">${appObject.address}</div>
            //         <h4>ZIP Code:</h4>
                            // <div id="appObjectZip">${appObject.zip}</div>
            //         <h4>Project Title:</h4> 
                            // <div id="appObjectTitle">${appObject.title}</div>
            //         <h4>Grant/Request Amount:</h4> 
                            // <div id="appObjectRequestAmount">${appObject.request_amount}</div>
            //         <h4>Number of individuals served by funding from this Adult Literacy application Total:</h4> 
                            // <div id="appObjectNbrServed">${appObject.nbr_served}</div>
            //         <h4>Is this a new project?:</h4> 
                            // <div id="appObjectNewPro">${appObject.new_proj}</div>
            //         <h4>What is your National Literacy Directory Program ID number?:</h4> 
                            // <div id="appObjectNldpId">${appObject.NLDP_id}</div>
            //         <h4>Geographic Classification:</h4> 
                            // <div id="appObjectGeoClass">${appObject.geo_class}</div>
            //         <h4>What is the unemployment rate?:</h4> 
                            // <div id="appObjectUnemployment">${appObject.unemployment_rate}</div>
            //         <h4>What is the drop-out rate?:</h4> 
                            // <div id="appObjectDropoutRate">${appObject.dropout_rate}</div>
            //         <h4>What is the poverty level in the geographical area served?:</h4> 
                            // <div id="appObjectPoverty">${appObject.poverty}</div>
            //         <h4>What is the literacy rate in the geographical area served?:</h4> 
                            // <div id="appObjectLiteracy">${appObject.literacy}</div>
            //         <h4>"If it is not the first year for this project, then how many individuals were served by this Adult Li":</h4> 
                            // <div id="appObjectPreviouslyServed">${appObject.previously_served}</div>
            //         <h4>Statement of Impact:</h4> 
                            // <div id="appObjectImpactStatement">${appObject.impact_statement}</div>
            //         <h4>Project/Program Objective:</h4> 
                            // <div id="appObjectObjective">${appObject.objective}</div>
            //         <h4>Project/Program Design:</h4> 
                            // <div id="appObjectDesign">${appObject.design}</div>
            //         <h4>Timeline:</h4> 
                            // <div id="appObjectTimeline">${appObject.timeline}</div>
            //         <h4>Assessment Methods:</h4> 
                            // <div id="appObjectAssessMethods">${appObject.assess_methods}</div>
            //         <h4>Project Facilities:</h4> 
                            // <div id="appObjectFacilities">${appObject.facilities}</div>
            //         <h4>Available Technology:</h4> 
                            // <div id="appObjectAvailableTech">${appObject.available_tech}</div>
            //         <h4>Are you requesting technology with this grant application?:</h4> 
                            // <div id="appObjectTechRequest">${appObject.tech_request}</div>
            //         <h4>"If yes, how will it be used to advance the literacy program we would be funding?":</h4> 
                            // <div id="appObjectAppObject">${appObject.tech_use_how}</div>
            //         <h4>Revenue - Sources of Funding Total:</h4> 
                            // <div id="appObjectFundingSources">${appObject.funding_sources}</div>
            //         <h4>Budget Allocations Total:</h4> 
                            // <div id="appObjectTotalBudget">${appObject.total_budget}</div>
            //         <h4>Budget Narrative:</h4> 
                            // <div id="appObjectNarrative">${appObject.budget_narrative}</div>
            //         <h4>Latitude:</h4> 
                            // <div id="appObjectLat">${appObject.lat}</div>
            //         <h4>Longitude:</h4> 
                            // <div id="appObjectLng">${appObject.lng}</div>
            //     </section>
        // </article>
        // `

        // test data
        `
        <div id ="appForm">
            <h2>Application</h2>
            <section id="appFormSection">
                <div class="field">
                    <h4>Project Title: </h4>
                    <p>text text</p>
                </div>
                <div class="field">
                    <h4>Request ID: </h4>
                    <p>text text</p>
                </div>
                <div class="field">
                    <h4>Complete Organization Address:</h4>
                    <p>text text</p>
                </div>
                <div class="field">ZIP Code: </div>
                <div class="field">Grant/Request Amount: </div>
                <div class="field">Number of individuals served by funding from this Adult Literacy application Total: </div>
                <div class="field">Is this a new project?: </div>
                <div class="field">What is your National Literacy Directory Program ID number?: </div>
                <div class="field">Geographic Classification: </div>
                <div class="field">What is the unemployment rate?: </div>
                <div class="field">What is the drop-out rate?: </div>
                <div class="field">What is the poverty level in the geographical area served?: </div>
                <div class="field">What is the literacy rate in the geographical area served?: </div>
                <div class="field">"If it is not the first year for this project, then how many individuals were served by this Adult Li": </div>
                <div class="field">Statement of Impact: </div>
                <div class="field">Project/Program Objective:</div>
                <div class="field">Project/Program Design: </div>
                <div class="field">Timeline: </div>
                <div class="field">Assessment Methods: </div>
                <div class="field">Project Facilities: </div>
                <div class="field">Available Technology: </div>
                <div class="field">Are you requesting technology with this grant application?: </div>
                <div class="field">"If yes, how will it be used to advance the literacy program we would be funding?":</div>
                <div class="field">Revenue - Sources of Funding Total: </div>
                <div class="field">Budget Allocations Total: </div>
                <div class="field">Budget Narrative: </div>
                <div class="field">Latitude: </div>
                <div class="field">Longitude: </div>
            </section>
        </div>
        `

        console.log(appForm)

        const appFormContainerDiv = document.querySelector("#app-form")
        appFormContainerDiv.innerHTML = appForm
    }
}