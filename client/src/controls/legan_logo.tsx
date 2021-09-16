import React from 'react'

const LeganLogo = () => {
    const [reloader, setreloader] = React.useState<true | false>(false);
    const changeLoader = (value: true | false) => { setreloader(value) }
    React.useEffect(() => {
        setTimeout(() => {
            // changeLoader(false);
            changeLoader(true);
        }, 4000)
    }, [reloader]);
    return reloader ? <object className="legan-logo" aria-label="legan-logo" data="/logo-leganix.svg" type="image/svg+xml" ></object> : <div></div>;
}

export default LeganLogo;
