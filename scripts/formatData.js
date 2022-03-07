export const formatCompanyData = (companyObj) => {
    return `
    <section class="company-information-el">
    <h2>${companyObj.companyName}</h2>
    <div class="company-address-el">
        <p class="company-street-el">${companyObj.addressFullStreet}</p>
        <p class="company-state-zip-el">${companyObj.addressCity}, ${companyObj.addressStateCode} ${companyObj.addressZipCode}</p>
    </div>
</section>
    `
}