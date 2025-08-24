import styled from "styled-components"

const style = {
  Home: styled.div`
    width: 100%;
    padding: 2rem;
    max-width: 80rem;
    margin: 0 auto;
  `,
  Section: styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  Img: styled.img`
    width: 12rem;
    height:16rem;
    object-fit: cover;
    @media (max-width: 768px) {
      display: none;
    }
  `,
  H1: styled.h1`
    font-size: 2.8rem;
    font-family: 'MaruBuriSemiBold';
    text-align:center;
  `,
  H2: styled.h2`    
    font-size: 1.6rem;
    margin: 4.2rem 0 1rem;
    font-family: 'MaruBuriSemiBold';
  `,
  TotalWork: styled.div`
    margin-top: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
    text-align: right;
  `,
  Intro: styled.div`
    font-size: 1.3rem;
    line-height: 1.8;
    margin-top: 2rem;
    border: 1px solid #ddd;
    padding: 1.4rem;
    white-space: pre-line;
    letter-spacing: 0.02rem;
  `,
  IntroStrong: styled.strong`
    font-family: 'MaruBuriBold';
  `,
}

export default style  