export const getDate = () => {
    const month = ['January', 'Febuary', 'March', 'Aprial', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let dd = new Date().getDate();
    let mm = new Date().getMonth();
    let year = new Date().getFullYear();
    return `${month[mm]} ${dd}, ${year}`;
}