import styled from "styled-components"

function StyleComponent() {

    // const Container = styled.div`
    //     border: 2px solid black;
    //     padding: 20px;
    //     margin: 10px;
    //     border-radius: 10px;
    //     background-color: #f9f9f9;
    // `;
    // const Title = styled.h1`
    //     color: #333;
    //     text-align: center;
    //     font-family: 'Arial, sans-serif';
    // `;
    // const Description = styled.p`
    //     color: #666;
    //     font-size: 16px;
    //     line-height: 1.5;
    //     font-family: 'Verdana, sans-serif';
    // `;
    const Heading=styled.h1`
    color:red;
    border:1px solid green;
    border-radius:5px;
    margin:20px;
    padding:20px
    `
    return (
        <>
        <h1> Style Component with React JS</h1> 
        <Heading>HELLO</Heading>
        </>
    )
}

export default StyleComponent
