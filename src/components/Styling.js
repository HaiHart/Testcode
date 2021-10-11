import styled from 'styled-components';

export const ButtonContainer = styled.button`
	text-transform : capitalize;
	font-size:1.4rem;
	background: transparent;
	border: 0.2rem solid var(--mainBlue);
	border-color:${props=>props.cart?"var(--mainYellow)":"var(--mainBlue)"};
	color:${props => props.cart ? "var(--mainYellow)" : "var(--mainBlue)"};
	border-radius: 0.75rem;
	padding: 0.25rem 0.4rem;
	cursor: pointer;
	margin: 0.2rem 0.5rem 0.3rem 0;
	transition: all 0.5s ease-in-out;
&:hover{
	background: ${props => props.cart ? "var(--mainYellow)" : "var(--mainBlue)"};;
	color:var(--mainWhite);
}
&:focus{
	outline: none;
}
`
export const NavWrapper = styled.nav`
	background: rgb(0,255,255);
	.nav-link{
		color: var(--mainBlue) !important;
		font-size: 1.3rem;
		text-transform: uppercase;
		font-weight: bold;
		font-family: 'Permanent Marker', cursive;
	}
`

export const titleBar = styled.div`
	background: var(--lightBlue);
	color: var(--mainDark);
`

export const ProductWrapper = styled.div`
	.card{
		border-color: transparent;
		transition: all 0.5s ease-in-out 0s;
	}
	.card-footer{
		background: transparent;
		border-top: transparent;
		transition: all 0.5s ease-in-out 0s;
	}
	.card-header{
		background: transparent;
		transition: all 0.5s ease-in-out 0s;
	}
	&:hover{
		.card{
			border: 0.04rem solid rgba(0,0,0,0.2);
			box-shadow: 2px 5px 5px 2px rgba(0,0,0,0.2);
		}
		.card-footer{
			background: rgb(0,255,255);
		}
		.card-header{
			background: rgb(0,255,255);
		}
	}
	.img-container{
		position: relative;
		overflow: hidden;
	}
	.card-img-top{
		transition: all 0.5s ease-in-out;
	}
	.img-container:hover .card-img-top{
		transform: scale(1.3);
	}
	.cart-btn{
		position: absolute;
		bottom: 0;
		right:0;
		padding; 0.2rem 0.4rem;
		background: var(--lightBlue);
		border: none;
		color: var(--mainWhite);
		font-size: 1.5rem;
		border-radius: 1.4rem 0 0 0;
		transform: translate(100%,100%);
		transition: all 0.5s ease-in-out;
	}
	.img-container:hover .cart-btn{
		transform: translate(0,0);
	}
	.cart-btn: hover{
		color: var(--mainDark);
		cursor: cell;
	}
`
export const ModalContainer = styled.div`
	position:fixed;
	top:0;
	left:0;
	right:0;
	bottom:0;
	@media (max-width:1600px){background:rgba(0,255,0,0.3);}
	@media (max-width:800px){background:rgba(255,0,0,0.3);}
	background:rgba(0,0,0,0.5);
	display:flex;
	align-items:center;
	justify-content:center;
	#modal{
		background: var(--mainWhite)
	}
`
