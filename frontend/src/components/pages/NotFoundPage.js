import React from 'react'
import styled from 'styled-components'

const NotFoundPage = () => {
    return (
        <>
		<NotFound>
			<h3 id="page-not-found-text">Sorry, page not found!</h3>
		</NotFound>
	</>
    )
}
const NotFound = styled.div`
	padding-top: 100px;
	text-align: center;
	height: calc(100vh - 440px);
`
export default NotFoundPage
