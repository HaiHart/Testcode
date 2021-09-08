import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context'
import { ButtonContainer, ModalContainer } from './Styling'
import List from './List';

export default class Credit extends Component {
	render() {
		return (
			<ProductConsumer>
				{value => {
					const { showcase, closeCredit } = value;
					if (!showcase) return null;
					else {
							return (
								<ModalContainer>
									<div className="container">
										<div className="row">
											<div className="col-8 mx-auto col-md-6 col-lg-6 text-center text-align-content-center text-capitalize" id="modal">
												<ProductConsumer>
													{value => {
														return value.textt.map(item => {
															return <List who={item} />
														})
													}}
												</ProductConsumer>
												
												<Link to="/">
													<ButtonContainer onClick={() => closeCredit()}>
														return
													</ButtonContainer>
												</Link>
											</div>
										</div>
									</div>
								</ModalContainer>
							)
						}
				}}
			</ProductConsumer>
		)
	}
}
