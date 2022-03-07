import {formatCompanyData} from "./formatData.js";
import {getCompanies} from "./data.js";

export const renderCompanyData = () =>{
    const htmlElement = document.querySelector(".companies-el");
    htmlElement.innerHTML = "<h1>Active Businesses</h1>"
    const companies = getCompanies();
    companies.forEach(companyObj =>{
        htmlElement.innerHTML += formatCompanyData(companyObj)
    });


}