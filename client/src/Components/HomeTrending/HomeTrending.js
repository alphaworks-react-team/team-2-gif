import React from 'react'
//height:30vh
//width:100%
const HomeTrending = () => {
    const styles = {
        height: "30vh",
        width: "100%",
    }
    return (
			<div styles={styles}>
				<p style={{ color: "white" }}>hello</p>

				<img
					src="https://media4.giphy.com/media/Cn4PbwWE6BlEavxJDD/200.gif?cid=1ab55bd9lbewejo4net42ky9txp132gxhfsmfk0op2vm1zkm&rid=200.gif&ct=g"
					alt=""
				/>
				<img
					src="https://media3.giphy.com/media/cdNSp4L5vCU7aQrYnV/200.gif?cid=1ab55bd9lbewejo4net42ky9txp132gxhfsmfk0op2vm1zkm&rid=200.gif&ct=g"
					alt="fixed hight"
				/>
			</div>
		);
}

export default HomeTrending
