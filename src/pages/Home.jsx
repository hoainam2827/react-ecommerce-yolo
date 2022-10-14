import React from 'react';
import Helmet from '../component/Helmet';
import HeroSlider from '../component/HeroSlider';
import heroSliderData from './../assets/fake-data/hero-slider';
import Section, {SectionTitle, SectionBody} from '../component/Section'
import PolicyCart from '../component/PolicyCart';
import policy from './../assets/fake-data/policy';
import Grid from './../component/Grid';
import { Link } from 'react-router-dom';
import productData from './../assets/fake-data/products';
import ProductCard from '../component/ProductCard';

import banner from '../assets/images/banner.png'

const Home = () => {
    return (
        <Helmet title='Trang chủ'>
            {/* hero-slider  */}
            <HeroSlider
                data={heroSliderData}
                control={true}
                auto={true}
                timeout = {5000}
            />
            {/* hero-slider  */}
            {/* policy section  */}
            <Section>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            policy.map((item,index)=><Link key={index} to='/policy'>
                                    <PolicyCart
                                        name={item.name}
                                        description={item.description}
                                        icon={item.icon}
                                    />
                            </Link>)
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* policy section  */}
            {/* product  */}
            <Section>
                <SectionTitle>
                    Top sản phẩm bán chạy trong tuần
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(4).map((item,index)=>(
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* product  */}

            {/* new product  */}
            <Section>
                <SectionTitle>
                    Sản phẩm mới
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(8).map((item,index)=>(
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* new product  */}

            {/* banner  */}
            <Section>
                <SectionBody>
                    <Link to='/catalog'>
                        <img src={banner} alt="" />
                    </Link>
                </SectionBody>
            </Section>
            {/* banner  */}
            {/* popular product  */}
            <Section>
                <SectionTitle>
                    phổ bién
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(12).map((item,index)=>(
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* popular product  */}
        </Helmet>
    );
}

export default Home;
