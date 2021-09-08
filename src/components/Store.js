import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import { ProductConsumer } from '../context'
import { ButtonContainer } from './Styling'

export default class Store extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="py-5">
					<div className="container">
						<Title name="Available" title="Order"/>
						<div className="row">
							<ProductConsumer>
								{value => {
									return value.products.map(product => {
										return <Product key={product.id} product={product}/>
									});
								}}
							</ProductConsumer>
						</div>
					</div>
				</div>
				<ProductConsumer>
					{value => {
						return (
							<ButtonContainer
								className="mx-auto text-capitalize"
								onClick={() => { value.openCredit() }}>
								credit
							</ButtonContainer>
					)
					}}
				</ProductConsumer>
			</React.Fragment>
			
		)
	}
}
