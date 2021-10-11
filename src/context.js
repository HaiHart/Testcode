//import axios from 'axios';
import axios from 'axios';
import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data'

const ProductContext = React.createContext();	
//provider
//consumer
class ProductProvider extends Component {
	state =
		//JSON.parse(localStorage.getItem('state')) ||
	{
		products: [],
		detailProduct: detailProduct,
		cart: [],
		modalOpen: false,
		modalProduct: detailProduct,
		textt: [],
		showcase: false,
		}
	getUpdate = async () => {
		let tempCart = [];
		this.state.products.forEach(item => {
			const singleItem = { ...item };
			if (singleItem.inCart === true) {
				tempCart = [...tempCart, singleItem];
			}
		})

		this.setState(() => {
			return { cart: tempCart };
		})
	}
	componentDidUpdate() {
		console.log(this.state);
	}
	componentDidMount() {
		/*(if (localStorage.getItem('state') !== 0) {
			this.getUpdate();
		} else */
		{
			this.setProduct();
		}
		axios.get('/api/news')
			.then(res => {
				const news = res.data;
				console.log(news);
				var result = Object.keys(news).map((e)=>{return news[e]})
				this.setState(() => { return { textt: result[0]} });
			}).catch(error => console.log(error))
	}
	setProduct = () => {
			let tempProducts = [];
			storeProducts.forEach(item => {
				const singleItem = { ...item };
				tempProducts = [...tempProducts, singleItem];
			})
			this.setState(() => {
				return { products: tempProducts };
			})
	}
	getList = () => {
		console.log(this.state.textt)
	}
	getItem = (id) => {
		const product = this.state.products.find(item => item.id === id);
		return product;
	}
	handleDetail = (id) => {
		const product = this.getItem(id );
		this.setState(() => {
			return { detailProduct: product };
		})
	}
	addToCart = id => {
		let tempProducts = [...this.state.products];
		const index = tempProducts.indexOf(this.getItem(id));
		const product = tempProducts[index];
		product.inCart = true;
		product.count = 1;
		const price = product.price;
		product.total = price;
		this.setState(() => {
			return { products: tempProducts, cart: [...this.state.cart, product]}
		})
		localStorage.setItem('state', JSON.stringify(this.state));
	}
	openModal = id => {
		const product = this.getItem(id);
		this.setState(() => {
			return { modalProduct: product, modalOpen: true };
		})
	}
	closeModal = () => {
		this.setState(() => {
			return { modalOpen: false };
		})
	}
	closeCredit = () => {
		this.setState(()=>{return {showcase:false}})
	}
	openCredit = () => {
		this.setState(()=>{return{showcase:true}})
	}
	render() {
		return (
			<ProductContext.Provider value={{
				...this.state,
				handleDetail: this.handleDetail,
				addToCart: this.addToCart,
				openModal: this.openModal,
				closeModal: this.closeModal,
				getList: this.getList,
				openCredit: this.openCredit,
				closeCredit: this.closeCredit,
			}}> 
				{this.props.children }
			</ProductContext.Provider>
		)
	}
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };