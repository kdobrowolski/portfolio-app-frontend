import styled from 'styled-components';
import breakpoint from '../../utils/breakpoints';

export const StyledProjects = styled.section`
    width: 100vw;
    max-width: 100%;
    background-color: #FAFAFA;
    
    .container {
        width: 80%;
        margin: auto;
        padding-top: 1px;

        .content {
            margin: 0;
            margin-top: 30px;
            padding-bottom: 30px;
            text-align: center;
            color: #6c6c6c;

            .center {
                width: 100%;
                text-align: center;
            }
            
            & > div {
                width: 270px;
                margin: 0 auto;
                margin-top: 20px;
                padding-top: 20px;
                padding-bottom: 20px;
                border: 1px solid #e6e6e6;
                border-radius: 10px;
                -webkit-box-shadow: -4px 5px 16px 0px rgba(193, 194, 197, 1);
                -moz-box-shadow: -4px 5px 16px 0px rgba(193, 194, 197, 1);
                box-shadow: -4px 5px 16px 0px rgba(193, 194, 197, 1);
                
                & > h2 {
                    font-size: 1rem;
                }
                & > p {
                    font-size: .8rem;
                }

                @media only screen and ${breakpoint.device.md} {
                    margin: 0;
                }

                .opened {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    overflow-y: auto;
                    z-index: 999999 !important;
                    display: block !important;
                    background-color: white;
                    & > img {
                        display: block;
                        margin: 0 auto;
                    }

                }

                .hidden {
                    display: none;
                }

                .showCloseBtn {
                    position: fixed;
                    display: block;
                    top: 50px;
                    right: 100px;
                    z-index: 999999 !important;
                    font-size: 3rem;

                    &:hover {
                        cursor: pointer;
                    }
                }

            }
            @media only screen and ${breakpoint.device.md} {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                row-gap: 40px;
                column-gap: 20px;
            }
        }

        @media only screen and ${breakpoint.device.lg} {
            width: 70%;
        }

        @media only screen and ${breakpoint.device.xl} {
            width: 50%;
        }
    }
`;