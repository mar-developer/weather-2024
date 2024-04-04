import styled from "styled-components";

export const PageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: ${(props) => props.gradient};

  .weather-details {
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    color: black;
    display: flex;
    flex-direction: row;
    align-items: center;

    .degrees {
      font-size: 8rem;
      font-weight: 200;
      margin-right: 4rem;

      span {
        font-size: 4rem;
        display: flex;
        justify-content: end;
        margin-top: -4rem;
        margin-left: 16rem;
      }
    }

    .details {
      width: 300px;

      .icon {
        width: 25px;
        font-size: 25px;
        margin-right: 5px;
      }

      p {
        margin-right: 1rem;
        display: flex;
        align-items: center;
      }

      .location {
        font-size: 3rem;
        margin: 0;
        line-height: 1;
      }

      .mood {
        font-size: 1.5rem;
        margin-bottom: 0;
        margin-top: 0.5rem;

        &:first-letter {
          text-transform: capitalize;
        }
      }

      .temp-wrap {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 57%;
      }
    }
  }
`;

export const OtherLocations = styled.div`
  padding-top: 2rem;
  z-index: 1;
  color: black;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-around;
  cursor: pointer;

  .location-card {
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    width: 100%;
    margin: 0 1rem;
    padding: 6rem 0;
    padding-bottom: 0;
    text-align: center;
    border-radius: 5px;

    h3 {
      background: linear-gradient(90deg, #f6d365 0%, #fda085 100%);
      margin: 0;
    }
  }
`;
