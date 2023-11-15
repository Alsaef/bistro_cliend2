import React, { useState } from 'react';
import orderImg from '../../assets/shop/banner2.jpg';
import Cover from '../Sheard/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SetMenu from '../Hook/SetMenu';
import FoodCard from '../FoodCard/FoodCard';
import { Helmet } from 'react-helmet-async';
const Order = () => {
    const [menu]=SetMenu()
    const salad = menu.filter(item => item.category === 'salad')
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drink = menu.filter(item => item.category === 'drinks')
 
    const [tabIndex, setTabIndex] = useState(0);
    return (
      
        <div>
              <Helmet>
        <title>Order</title>
      </Helmet>
            <Cover img={orderImg} menuTitle={"OUR ORDER"}></Cover>

            <Tabs defaultIndex={0} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>pizza</Tab>
    <Tab>soups</Tab>
    <Tab>desserts</Tab>
    <Tab>drinks</Tab>
  </TabList>
  <TabPanel>
   <div className=' grid lg:grid-cols-3 gap-6 '>
   {
        salad.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
    }
   </div>
  </TabPanel>
  <TabPanel>
  <div className=' grid lg:grid-cols-3 gap-6 '>
   {
        pizza.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
    }
    </div>
  </TabPanel>
  <TabPanel>
  <div className=' grid lg:grid-cols-3 gap-6 '>
   {
        soup.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
    }
    </div>
  </TabPanel>
  <TabPanel>
  <div className=' grid lg:grid-cols-3 gap-6 '>
   {
        dessert.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
    }
    </div>
  </TabPanel>
  <TabPanel>
  <div className=' grid lg:grid-cols-3 gap-6 '>
   {
        drink.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
    }
    </div>
  </TabPanel>
</Tabs>
        </div>
    );
};

export default Order;