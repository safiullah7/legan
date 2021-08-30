import { Skeleton } from '@material-ui/lab';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

interface IPropsBodyHeader {
    heading: string,
    subHeading?: string,
    headingColor: string,
    SubHeadingColor?: string,
    path?: string,
    loading?: true | false,
}

const BodyHeader: React.FC<IPropsBodyHeader> = (
    { heading, subHeading, headingColor, SubHeadingColor, path, loading }
) => {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <>
            <DivBodyHeader
                headingColor={headingColor}
                SubHeadingColor={SubHeadingColor}
                subHeading={subHeading}
            >
                {
                    subHeading !== undefined ?
                        <h1>
                            <Link style={{ textDecoration: 'none', color: headingColor }}
                                to={path !== undefined ? path : currentPath}
                            >
                                {heading} /
                            </Link>
                            <span>
                                {(loading !== undefined ? loading : true) ? ` ${subHeading}` : <Skeleton variant="text" width="75px" height="25px" style={{ display: 'inline-block', margin: '10px 0px 0px 5px' }} />}
                            </span>
                        </h1>
                        : <h1 style={{ color: headingColor }}>{heading}</h1>
                }
                <div className="blur-hr"></div>
            </DivBodyHeader>
        </>
    );
};

interface IPropsStyled {
    headingColor?: string,
    SubHeadingColor?: string,
    subHeading?: string,
}
const DivBodyHeader = styled.div<IPropsStyled>`
h1{
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 0px;
    cursor: ${(props) => props.subHeading !== undefined ? 'pointer' : 'default'} ;
    color: ${(props) => props.headingColor};
    span{
        font-size: 24px;
        font-weight: 400;
        cursor: default;
        color: ${(props) => props.SubHeadingColor === undefined ? 'lightgrey' : props.SubHeadingColor}
    }
}
.blur-hr{
  height: 3px;
  width: 85px;
  background-color: rgba(34, 147, 251, 1);
  border-radius: 25px;
  margin: 12px auto;
}
`;
export default BodyHeader;

