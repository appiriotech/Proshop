import React,{useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'


const Homescreen =()=>{

	const [products,setproducts]=useState([])

	useEffect(()=>{

		const fetchproducts=async()=>{
			const {data}=await axios.get('api/products')

			setproducts(data)
		}

	fetchproducts()

	},[])

		return (

			<>
					<h1>Latest products</h1>
					<Row>
						{products.map(product => (

						<Col key={product._id} sm={12} md={6} lg={4} xl={3}>

							<Product product={product} />
						</Col>


						))}
						

					</Row>
//					console.log(product._id);



			</>

)
}

export default Homescreen




