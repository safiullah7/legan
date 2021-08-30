export const getDate = () => {
    const month = ['January', 'Febuary', 'March', 'Aprial', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let dd = new Date().getDate();
    let mm = new Date().getMonth();
    let year = new Date().getFullYear();
    return `${month[mm]} ${dd}, ${year}`;
}
export const iconsArray = [
    { imgUrl: '/about-bag.png' },
    { imgUrl: '/about-draft.png' },
    { imgUrl: '/about-research.png' },
    { imgUrl: '/world.png' },
    { imgUrl: '/rocket.png' },
];