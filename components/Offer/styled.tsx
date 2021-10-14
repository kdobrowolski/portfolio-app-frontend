import styled from 'styled-components';
import breakpoint from '../../utils/breakpoints';

export const StyledOffer = styled.section`
    width: 100vw;
    max-width: 100%;

    .container {
        width: 80%;
        margin: auto;
        padding-bottom: 20px;
        position: relative;

        .offerElement {
            text-align: center;
            margin-top: 60px;

            .offer-content {
                h3 {
                    font-weight: 500;
                    color: #131313;
                    font-size: 1.1rem;
                }
                p {
                    font-size: .9rem;
                    color: #6c6c6c;
                }
            }
        }

        @media only screen and ${breakpoint.device.lg} {
            width: 70%;

            .offerElement {
                display: flex;
                flex-direction: row;

                .offer-image {
                    margin-top: 25px;
                }

                .offer-content {
                    margin-left: 100px;
                    width: 300px;

                    h3 {
                        font-size: 1.5rem;
                    }
                    p {
                        font-size: 1.1rem;
                    }
                }
            }

            .offerElement:nth-child(3) {
                .offer-image {
                    order: 2;
                    position: absolute;
                    right: 0;
                }
                .offer-content {
                    order: 1;
                    margin-left: auto;
                    margin-right: 275px;
                }
            }
        }

        @media only screen and ${breakpoint.device.xl} {
            width: 50%;

            .offerElement:nth-child(3) {
                .offer-content {
                    margin-left: auto;
                    margin-right: 275px;
                }
            }
        }

        @media only screen and ${breakpoint.device.xxl} {
            .offerElement:nth-child(3) {
                .offer-content {
                    margin-left: auto;
                    margin-right: 275px;
                }
            }
        }
    }
`;