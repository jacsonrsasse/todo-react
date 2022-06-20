import styled from 'styled-components';

const NewTaskDialogDesign = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    & div.block-area {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.5;
        /* background-color: ${(props) => props.theme.background}; */
        background-color: #707070;
        z-index: 998;
        user-select: none;
        cursor: progress;
    }

    & div.dialog-area {
        max-width: 550px;
        padding: 10px 20px;
        background-color: #fff;
        border-radius: 15px;
        background-color: #fff;
        z-index: 999;
        user-select: none;
        display: grid;
        gap: 5px;

        & h3 {
            margin-bottom: 10px;
            text-align: center;
        }

        & div.dialog-fieldarea {
            display: grid;
            gap: 5px;
        }

        & div.dialog-field {
            display: grid;
            grid-template-columns: 70px 1fr;
            gap: 8px;

            & label {
                text-align: right;
                &:after {
                    content: ':';
                }
            }

            & input,
            textarea {
                padding: 2px 5px;
            }

            & input {
                width: 150px;

                &.required {
                    border-color: red;
                    box-shadow: 0 0 5px red;
                }
            }

            & textarea {
                height: 120px;
                width: 350px;
            }
        }
    }
`;

export default NewTaskDialogDesign;
