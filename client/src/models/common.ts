export const getDate = () => {
    const month = ['January', 'Febuary', 'March', 'Aprial', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let dd = new Date().getDate();
    let mm = new Date().getMonth();
    let year = new Date().getFullYear();
    return `${month[mm]} ${dd}, ${year}`;
}
export const iconsArray = [
    { imgUrl: '/Legal_expertise_data_protection.svg' },
    { imgUrl: '/Legal_expertise_tech_contracts.svg' },
    { imgUrl: '/Legal_expertise_intellectual_property.svg' },
    { imgUrl: '/Legal_expertise_Internet_law.svg' },
    { imgUrl: '/Legal_Research.svg' },
    { imgUrl: '/Document_Drafting.svg' },
    { imgUrl: '/Consulting.svg' }
];